// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/analytics";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs0dWH8H-4xXUqdjD4RUz3HYiSz47kfT0",
  authDomain: "denumire-f4d6b.firebaseapp.com",
  projectId: "denumire-f4d6b",
  storageBucket: "denumire-f4d6b.appspot.com",
  messagingSenderId: "295615263392",
  appId: "1:295615263392:web:92ead1853d92e539914fc5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
