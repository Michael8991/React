// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYYujHu4f0xo4RRFeOaxRrFUTjz8Yvhws",
    authDomain: "react-cursos-ed98a.firebaseapp.com",
    projectId: "react-cursos-ed98a",
    storageBucket: "react-cursos-ed98a.firebasestorage.app",
    messagingSenderId: "853408659250",
    appId: "1:853408659250:web:b121a848bb474b975a492b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)