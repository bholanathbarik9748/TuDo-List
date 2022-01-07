import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCA_DHqKZWEeo8YbV7DxefppL_00NLLd5A",
  authDomain: "tudolist-e25dc.firebaseapp.com",
  projectId: "tudolist-e25dc",
  storageBucket: "tudolist-e25dc.appspot.com",
  messagingSenderId: "832190436363",
  appId: "1:832190436363:web:51351dd48da2a5c6a1630e",
  measurementId: "G-6NCM8W0S30"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };