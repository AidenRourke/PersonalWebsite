require('dotenv').config();

var microdb = require('nodejs-microdb');
const {sha512, generateRandomString} = require('./utils');

var db = new microdb({
    'file': './database/database.json',
    'savetime': 1
});

const username = "aidenrourke";
const salt = generateRandomString(16);
const password = sha512(process.env.ADMIN_PASSWORD, salt);

console.log("Adding data");

db.add({
    username,
    password: password.passwordHash,
    salt,
}, "admin");

console.log("New data:", db.data);

process.exit();