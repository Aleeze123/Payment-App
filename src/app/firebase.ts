// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpLVGEgineXfh2wXHmyDEOVnMUTSyokbU",
  authDomain: "payment-app-8cc37.firebaseapp.com",
  projectId: "payment-app-8cc37",
  storageBucket: "payment-app-8cc37.firebasestorage.app",
  messagingSenderId: "445793051290",
  appId: "1:445793051290:web:6b3055b9037c6dbfa37523"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirebase=()=>{
    return app
}

