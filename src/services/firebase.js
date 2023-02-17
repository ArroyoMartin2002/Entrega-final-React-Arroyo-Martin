// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLyFN4qHGhF5Q6EhT3oF2ccU0nXB53Ako",
    authDomain: "mscmusicstore.firebaseapp.com",
    projectId: "mscmusicstore",
    storageBucket: "mscmusicstore.appspot.com",
    messagingSenderId: "302700802368",
    appId: "1:302700802368:web:4703cd6ce112e0615bcaa5",
    measurementId: "G-7DSV0N73DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);