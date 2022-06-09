const express = require('express');
const { MongoClient, ServerApiVersion, Timestamp } = require('mongodb');
const fireAdmin = require("firebase-admin");
const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require('firebase-admin/auth');
const argon2 = require('argon2');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' })

// Twilio Config
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio')(twilioAccountSid, twilioAuthToken);

// Set up app
const app = express()
const PORT = 8080;

// Connect to Mongo
const uri = 'mongodb+srv://kyledickey:loudogky8@cluster0.4lv6urk.mongodb.net/?retryWrites=true&w=majority';
const mClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
mClient.connect();
const db = mClient.db('main')

// Connect to firebase
// Service account
var serviceAccount = require('./mirky-351704-firebase-adminsdk-3h65w-5b3e9079b1.json');

// Initialize 
const fApp = initializeApp({
    credential: fireAdmin.credential.cert(serviceAccount),
    databaseURL: "https://mirky-351704-default-rtdb.firebaseio.com/",
});
const auth = getAuth(fApp)

// Apply JSON middleware
app.use(express.json())

// Endpoints
// Auth
// Signup
app.post('/auth/signup', async (req,res) => {
    
    const { email, password, username, apiKey } = req.body;

    const apiKeyColl = db.collection('apiKey')
    const apiKeyDoc = await apiKeyColl.findOne({ current: true })

    if (apiKey != apiKeyDoc.key) {
        res.status(403).send({ message: 'ERROR: Invalid API Key' })
        return
    }

    const hash = await argon2.hash(password);

    const coll = db.collection('users')
    const checkNameAvail = await coll.findOne({ displayName: username })

    if (checkNameAvail != null) {
        res.status(418).send({ message: 'ERROR: Username is taken' })
        return
    }

    auth.createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: username,
        disabled: false,

    }).then((userRecord) => {

        const data = {
            uid: userRecord.uid,
            email: userRecord.email,
            emailVerified: false,
            phoneNumber: null,
            displayName: username,
            photoURL: null,
            disabled: false,
            metadata: {
                createdAt: userRecord.metadata.creationTime,
                lastSignInTime: userRecord.metadata.lastSignInTime,
            },
            passwordHash: hash
        }

        coll.insertOne(data).then(() => {
            res.send(data);
        })

    }).catch((error) => {
        res.status(418).send(error);
    })

})

// Login
app.post('/auth/login', async (req,res) => {

    const { email, password, apiKey } = req.body;

    const apiKeyColl = db.collection('apiKey')
    const apiKeyDoc = await apiKeyColl.findOne({ current: true })

    if (apiKey != apiKeyDoc.key) {
        res.status(403).send({ message: 'ERROR: Invalid API Key' })
        return
    }

    const coll = db.collection('users')
    const doc = await coll.findOne({ email: email })

    if (doc == null) {
        res.status(403).send({
            message: 'ERROR: No account found with given email - ' + email
        })

        return
    }

    if (await argon2.verify(doc.passwordHash, password)) {
        
        const date = new Date()
        const timestamp = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`
        
        await coll.updateOne({ uid: doc.uid }, { $set: { metadata: { createdAt: doc.metadata.createdAt, lastSignInTime: timestamp } } })
    
        res.status(200).send(doc)

    } else {
        
        res.status(403).send({ 
            message: 'ERROR: Incorrect password'
        })

    }

})

// Delete User
app.delete('/auth/delete-user', async (req,res) => {

    const { email, password, apiKey } = req.body

    const apiKeyColl = db.collection('apiKey')
    const apiKeyDoc = await apiKeyColl.findOne({ current: true })

    if (apiKey != apiKeyDoc.key) {
        res.status(403).send({ message: 'ERROR: Invalid API Key' })
        return
    }

    const coll = db.collection('users')
    const doc = await coll.findOne({ email: email })

    if (doc == null) {
        res.status(403).send({
            message: 'ERROR: No account found with given email - ' + email
        })

        return
    }

    if (await argon2.verify(doc.passwordHash, password)) {
        
        auth.deleteUser(doc.uid).then(() => {
            coll.deleteOne({ uid: doc.uid }).then(() => {
                res.status(200).send({ message: 'SUCCESS: Deleted user - ' + email })
            })
        })

    } else {
        
        res.status(403).send({ 
            message: 'ERROR: Incorrect password'
        })

    }

})

// Update Username
app.put('/auth/update/username', async (req, res) => {

    const { email, password, apiKey, newUsername } = req.body

    const apiKeyColl = db.collection('apiKey')
    const apiKeyDoc = await apiKeyColl.findOne({ current: true })

    if (apiKey != apiKeyDoc.key) {
        res.status(403).send({ message: 'ERROR: Invalid API Key' })
        return
    }

    const coll = db.collection('users')
    const doc = await coll.findOne({ email: email })

    if (await argon2.verify(doc.passwordHash, password)) {

        const checkNameAvail = await coll.findOne({ displayName: newUsername })

        if (checkNameAvail != null) {
            res.status(418).send({ message: 'ERROR: Username is taken' })
            return
        }
        
        await coll.updateOne({ uid: doc.uid }, { $set: { displayName: newUsername } })

        res.status(200).send({ message: 'SUCCESS: Username Updated' })

    } else {
        
        res.status(403).send({message: "ERROR: Incorrect password"})

    }

})

'use strict';

// Main page
app.get('/', (req,res) => {
    res.send('poop')
})

// Launch server
app.listen(PORT, () => {
    console.log(`Live on: http://localhost:${PORT}`)
})

module.exports = app;