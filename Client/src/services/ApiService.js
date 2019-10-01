import axios from "axios";


const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://whispering-tundra-82613.herokuapp.com' : 'http://localhost:8888';

const ApiService = {
    getTopTrack(timerange) {
        return axios.get(`${BASE_URL}/top_track?time_range=${timerange}`)
    },

    getPlaylist() {
        return axios.get(`${BASE_URL}/playlist`)
    },

    search(title) {
        return axios.get(`${BASE_URL}/search?title=${title}`)
    },

    postTrack(track) {
        return axios.post(`${BASE_URL}/playlist`, {track})
    },

    startSSE() {
        return new EventSource(`${BASE_URL}/stream`)
    }
};

export default ApiService;

