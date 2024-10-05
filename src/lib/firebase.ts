// client/src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, onSnapshot, orderBy } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCW44riJJVCrwZVEm_ot3hZICCqlKe5_Hg",
    authDomain: "chatmodule-49f11.firebaseapp.com",
    projectId: "chatmodule-49f11",
    storageBucket: "chatmodule-49f11.appspot.com",
    messagingSenderId: "419491122281",
    appId: "1:419491122281:web:02ae863d4e3dd12130a6f8",
    measurementId: "G-GBL47YXCJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { db, collection, addDoc, query, onSnapshot, orderBy, storage }; // Export storage
