import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_W2rtd4w7N4JVq4Q9qEPVnpaqzw3e9HY",
    authDomain: "nanochat-653d9.firebaseapp.com",
    projectId: "nanochat-653d9",
    storageBucket: "nanochat-653d9.appspot.com",
    messagingSenderId: "106019507185",
    appId: "1:106019507185:web:fc92c726d03177ddac9250"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }