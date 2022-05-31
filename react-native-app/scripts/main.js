import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth'
// const { MongoClient, ServerApiVersion } = require('mongodb');

// Firebase init
const firebaseConfig = {
    apiKey: "AIzaSyDeg9kyPy-T1Y1BTcUFWJfUz-QM6QMxcg0",
    authDomain: "mirky-351704.firebaseapp.com",
    projectId: "mirky-351704",
    storageBucket: "mirky-351704.appspot.com",
    messagingSenderId: "186218056664",
    appId: "1:186218056664:web:cc330691a4a4a5147080ad",
    measurementId: "G-HJWYDHY245"
}
const fireApp = initializeApp(firebaseConfig)
const auth = getAuth(fireApp)
// const analytics = getAnalytics(fireApp)
// const auth = getAuth(fireApp)

// Mongo DB init
// const MongoUri = 'mongodb+srv://kyledickey:loudogky8@cluster0.4lv6urk.mongodb.net/?retryWrites=true&w=majority';
// const mClient = new MongoClient(MongoUri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// mClient.connect();
// const db = mClient.db('main');

// Sign Up Function
export const signUp = (number) => {
    if (number == null) {
        return
    }

    if (number.length < 10 || number.length > 10) {
        return
    } else {
        const appVerifier = window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
        signInWithPhoneNumber(auth, number, appVerifier)
            .then((confirmationResult) => {
                  // SMS sent. Prompt user to type the code from the message, then sign the
                  // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
      
                console.log(confirmationResult)
                  // ...
            }).catch((error) => {
                  // Error; SMS not sent
                  // ...
            });
    }
}