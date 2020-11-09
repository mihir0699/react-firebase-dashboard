import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/storage"
firebase.initializeApp(
    {
        apiKey: "AIzaSyDbaTzAYEBJ0NnNvlJfvWhVp8BCgRYesu4",
    authDomain: "grid-19a68.firebaseapp.com",
    databaseURL: "https://grid-19a68.firebaseio.com",
    projectId: "grid-19a68",
    storageBucket: "grid-19a68.appspot.com",
    messagingSenderId: "973148435564",
    appId: "1:973148435564:web:4db4a8a8ad47641ca6d449",
    measurementId: "G-7M5SN65T2D"
    }
)

export const firestore = firebase.firestore();
export const storage = firebase.storage();