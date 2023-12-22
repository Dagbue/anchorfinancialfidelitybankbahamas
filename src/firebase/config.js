import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBb43cUXMcc5_2mg70oqIO7nWR-KneMtyY",
    authDomain: "affcu-a373c.firebaseapp.com",
    projectId: "affcu-a373c",
    storageBucket: "affcu-a373c.appspot.com",
    messagingSenderId: "45237913307",
    appId: "1:45237913307:web:a02163288d21a40a962efe"
};


// init firebase
initializeApp(firebaseConfig)





//init firebase auth
const auth = getAuth();

const database = getDatabase();

const db = getFirestore();

const storage = getStorage();



export { auth, db, database, storage}

