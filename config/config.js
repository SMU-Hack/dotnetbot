require('dotenv').config();
const firebase = require('firebase');

const config = {};
config.firebase = {};

config.firebase.apiKey = process.env.FIREBASE_API_KEY;
config.firebase.authDomain = process.env.FIREBASE_AUTH_DOMAIN;
config.firebase.databaseURL = process.env.FIREBASE_DATABASE_URL;
config.firebase.storageBucket = process.env.FIREBASE_STORAGE_BUCKET;

/* Firebase config */
firebase.initializeApp(config.firebase);

module.exports = config;
