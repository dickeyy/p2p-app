const express = require('express')
const fireAdmin = require("firebase-admin");
const { initializeApp } = require("firebase-admin/app")
const { getAuth } = require('firebase-admin/auth')
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

// Connect Mongo
const uri = 'mongodb+srv://kyledickey:loudogky8@cluster0.4lv6urk.mongodb.net/?retryWrites=true&w=majority';
const mClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
mClient.connect();
const db = mClient.db('main')

// Service account
var serviceAccount = require('./mirky-351704-firebase-adminsdk-3h65w-5b3e9079b1.json');

// Initialize firebase
const fApp = initializeApp({
    credential: fireAdmin.credential.cert(serviceAccount),
    databaseURL: "https://mirky-351704-default-rtdb.firebaseio.com/",
});
const auth = getAuth(fApp)

// Set up express
const api = express()

// Main Page
api.post('/authenticate', (req, res) => {
    const email = req.headers['user']['email']
    const password = req.headers['user']['password']

    auth.createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: email,
        disabled: false,
    })

    res.status('200')
})

api.get('/test', (req,res) => {
    res.send('Hello')
})

exports.api = api