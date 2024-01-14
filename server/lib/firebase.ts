// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD34zCbHULChHQWot01CeRa7ai-8Uq_9jw",
    authDomain: "risman-wedding.firebaseapp.com",
    projectId: "risman-wedding",
    storageBucket: "risman-wedding.appspot.com",
    messagingSenderId: "780155852519",
    appId: "1:780155852519:web:2def23473db250f03af442",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const firestoreDb = getFirestore(app);
