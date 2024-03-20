// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBH7P3j7bA078XcYMN1PF992sgzn8U8hoQ",
  authDomain: "reactproyecto1-f15bc.firebaseapp.com",
  projectId: "reactproyecto1-f15bc",
  storageBucket: "reactproyecto1-f15bc.appspot.com",
  messagingSenderId: "752417605802",
  appId: "1:752417605802:web:174e52cf742434b027a8d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)