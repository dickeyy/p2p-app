// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyDeg9kyPy-T1Y1BTcUFWJfUz-QM6QMxcg0",
    authDomain: "mirky-351704.firebaseapp.com",
    projectId: "mirky-351704",
    storageBucket: "mirky-351704.appspot.com",
    messagingSenderId: "186218056664",
    appId: "1:186218056664:web:cc330691a4a4a5147080ad",
    measurementId: "G-HJWYDHY245"
};  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);