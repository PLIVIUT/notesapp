import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDEIlmdxRZmMHsYevboa5k6qPE6bmq57AA",
    authDomain: "reactnotes-d9c01.firebaseapp.com",
    projectId: "reactnotes-d9c01",
    storageBucket: "reactnotes-d9c01.appspot.com",
    messagingSenderId: "794931903866",
    appId: "1:794931903866:web:503c54de98f5e569326ac3",
    measurementId: "G-BH9BCEGL82"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

