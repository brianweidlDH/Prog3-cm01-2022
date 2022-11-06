import app from 'firebase/app';
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBGeEnE4uM-e5zsMJuU93PIEpVjTjv5zGw",
  authDomain: "pw-gram.firebaseapp.com",
  projectId: "pw-gram",
  storageBucket: "pw-gram.appspot.com",
  messagingSenderId: "906510810923",
  appId: "1:906510810923:web:448d3c7d947fdd112e0f6e"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

// authentication
export const auth = firebase.auth()
// database
export const db = app.firestore()
// storage
export const storage = app.storage()
