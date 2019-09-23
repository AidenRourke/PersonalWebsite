require('dotenv').config();

const express = require('express'); // Express web server framework
const request = require('request'); // "Request" library
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const {generateRandomString} = require('./utils');
const checkPermission = require('./middleware/checkPermission');
const sse = require('./middleware/sse');
const SpotifyWebApi = require('spotify-web-api-node');
const {Pool} = require('pg');

const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret
const redirect_uri = `${process.env.BASE_URL || "http://localhost:8888"}/callback`; // Your redirect uri

const stateKey = 'spotify_auth_state';

const app = express();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

const spotifyApi = new SpotifyWebApi();

app.use(express.static(`${__dirname}/public`))
    .use(cors())
    .use(cookieParser())
    .use(checkPermission({pool}))
    .use(sse);

const refreshToken = function () {

    pool.query("SELECT refresh_token FROM spotify", (err, res) => {
        const options = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))},
            form: {
                grant_type: 'refresh_token',
                refresh_token: res.rows[0].refresh_token
            },
            json: true
        };

        request.post(options, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                const access_token = body.access_token;
                spotifyApi.setAccessToken(access_token);
            }
        });
    });
};

refreshToken();

function pollSpotify(request, response) {
    let previouslyPlaying;
    let first = true;

    console.log("Polling started");
    const interval = setInterval(function () {
        spotifyApi.getMyCurrentPlayingTrack()
            .then(
                function (data) {
                    if (!data.body.item) {
                        if (previouslyPlaying || first) {
                            response.write(`data: ${JSON.stringify({})}\n\n`);
                        }
                        else {
                            response.write(`\n`);
                        }
                        if (previouslyPlaying) previouslyPlaying = false;
                    }
                    else {
                        pool.query("SELECT current_song_id FROM spotify", (err, res) => {
                            const currentSongId = res.rows[0].current_song_id;
                            if (!previouslyPlaying || currentSongId !== data.body.item.id || first) {
                                pool.query({
                                    text: "UPDATE spotify SET current_song_id = $1",
                                    values: [data.body.item.id]
                                });
                                response.write(`data: ${JSON.stringify(data.body.item)}\n\n`);
                            } else {
                                response.write(`\n`);
                            }
                            if (!previouslyPlaying) previouslyPlaying = true;
                        });
                    }
                    if (first) first = false;
                },
                function (err) {
                    console.log(err)
                }
            );
    }, 1000);

    request.on('close', () => {
        console.log("Polling ended");
        clearInterval(interval);
    });
}

app.get('/stream', function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    pollSpotify(request, response)
});

app.get('/top_track', function (req, res) {
    const {time_range} = req.query;

    spotifyApi.getMyTopTracks({limit: 5, time_range})
        .then(
            function (data) {
                const random = Math.floor(Math.random() * Math.floor(5));
                res.send(data.body.items[random]);
            },
            function (err) {
                res.sendStatus(401);
                console.log(err);
            }
        )
});


app.get('/login', function (req, res) {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    const scope = 'user-read-currently-playing user-top-read';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
});

startRefresh = function (expires_in) {
    setInterval(function () {
        refreshToken();
        console.log("refreshed token")
    }, expires_in * 1000)
};

app.get('/callback', function (req, res) {

    // your application requests refresh and access tokens
    // after checking the state parameter

    const code = req.query.code || null;
    const state = req.query.state || null;
    const storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.send("state_mismatch")
    } else {
        res.clearCookie(stateKey);
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {

                const {refresh_token, access_token, expires_in} = body;

                // Store Refresh and Access token
                pool.query({
                    text: "UPDATE spotify SET refresh_token = $1",
                    values: [refresh_token]
                });
                spotifyApi.setAccessToken(access_token);
                startRefresh(expires_in);
                res.send("Successfully authenticated");
            } else {
                res.send("Invalid Token")
            }
        });
    }
});

console.log('Listening on 8888');
app.listen(process.env.PORT || 8888);
