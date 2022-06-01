// import firebase from '@react-native-firebase/app';
// // const { MongoClient, ServerApiVersion } = require('mongodb');
// import * as auth from '@react-native-firebase/auth';

// // Firebase init
// const firebaseConfig = {
//     apiKey: "AIzaSyDeg9kyPy-T1Y1BTcUFWJfUz-QM6QMxcg0",
//     authDomain: "mirky-351704.firebaseapp.com",
//     projectId: "mirky-351704",
//     storageBucket: "mirky-351704.appspot.com",
//     messagingSenderId: "186218056664",
//     appId: "1:186218056664:web:cc330691a4a4a5147080ad",
//     measurementId: "G-HJWYDHY245"
// }
// const config = {
//     name: 'SECONDARY_APP',
// };
  
// await firebase.initializeApp(firebaseConfig);

// // Example using auth
// // const cUser = firebase.app('SECONDARY_APP').auth().currentUser;

// console.log(cUser)


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

    
        // const appVerifier = window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
        // signInWithPhoneNumber(auth, number, appVerifier)
        //     .then((confirmationResult) => {
        //           // SMS sent. Prompt user to type the code from the message, then sign the
        //           // user in with confirmationResult.confirm(code).
        //         window.confirmationResult = confirmationResult;
      
        //         console.log(confirmationResult)
        //           // ...
        //     }).catch((error) => {
        //           // Error; SMS not sent
        //           // ...
        //     });
    const req = fetch('https://api.mirky.app/authenticate', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            user: {
                email: number,
                password: 'nuts'
            }
        }
    }).then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err));
    
}