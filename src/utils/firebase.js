// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA_ceZHtmPTEJ3I4cXw0FURS7tCBq3V60",
  authDomain: "netfixgpt-a6f7f.firebaseapp.com",
  projectId: "netfixgpt-a6f7f",
  storageBucket: "netfixgpt-a6f7f.appspot.com",
  messagingSenderId: "171058017425",
  appId: "1:171058017425:web:b6c6ca2c0961a5f58d7b30",
  measurementId: "G-6X7D8YDBXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();