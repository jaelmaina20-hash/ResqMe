// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVg-ivviuGXsfqAxMHGpwaFdqbvtWuBts",
  authDomain: "resqme-702a9.firebaseapp.com",
  projectId: "resqme-702a9",
  storageBucket: "resqme-702a9.firebasestorage.app",
  messagingSenderId: "289289525300",
  appId: "1:289289525300:web:97d086a01cb02a51d91261",
  measurementId: "G-WB9F19T4Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)