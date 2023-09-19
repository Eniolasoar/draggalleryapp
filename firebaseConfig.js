// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0r7gWXm6AfXL-_4RNpxvmX-1l92GhRU8",
  authDomain: "dragimagegallery.firebaseapp.com",
  databaseURL: "https://dragimagegallery-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dragimagegallery",
  storageBucket: "dragimagegallery.appspot.com",
  messagingSenderId: "264131398218",
  appId: "1:264131398218:web:b4d7ca840e402bc21074b3",
  measurementId: "G-TNVJESFDBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth };