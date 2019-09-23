/*
Assumes the following tables have been created
CREATE TABLE admin(
    username VARCHAR(20),
    password VARCHAR(200) NOT NULL,
    salt VARCHAR(16) NOT NULL,
    PRIMARY KEY (username)
    );

CREATE TABLE spotify(
    lock char(1),
    refresh_token VARCHAR(200),
    current_song_id VARCHAR(30),
    PRIMARY KEY (lock)
    );
 */

require('dotenv').config();
const {Pool} = require('pg');

const {sha512, generateRandomString} = require('./utils');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

const username = process.env.ADMIN_USERNAME;
const salt = generateRandomString(16);
const password = sha512(process.env.ADMIN_PASSWORD, salt);

const query = {
    text: "INSERT INTO admin(username, password, salt) VALUES($1, $2, $3)",
    values: [username, password.passwordHash, salt]
};

pool.query(query, (err, res) => {
    console.log(err, res);
});

pool.query("INSERT INTO spotify(lock) VALUES('X')", (err, res) => {
    console.log(err, res);
});