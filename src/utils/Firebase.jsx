// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrvlk3a2JhjDVt9R9zJV68p2ghGi2NHs8",
  authDomain: "netflixgpt-d1b4c.firebaseapp.com",
  projectId: "netflixgpt-d1b4c",
  storageBucket: "netflixgpt-d1b4c.appspot.com",
  messagingSenderId: "349389806640",
  appId: "1:349389806640:web:e8cf3e17bf895623eb61f5",
  measurementId: "G-JD49NGF07H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();
