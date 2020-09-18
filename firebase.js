import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbYWb8aeUQfhhY99Zzt6yXQNfLrDAbdQU",
    authDomain: "instagram-clone-4c889.firebaseapp.com",
    databaseURL: "https://instagram-clone-4c889.firebaseio.com",
    projectId: "instagram-clone-4c889",
    storageBucket: "instagram-clone-4c889.appspot.com",
    messagingSenderId: "1034702429284",
    appId: "1:1034702429284:web:11415fc6934fa669019371",
    measurementId: "G-F49BYJE0QC"
  });
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  export  {firebase,db,auth,storage};