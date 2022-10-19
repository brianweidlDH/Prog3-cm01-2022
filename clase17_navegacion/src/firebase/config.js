import app from 'firebase/app';
import firebase from 'firebase';

//Aca va la constante de la config de firebase.
const firebaseConfig = {
  apiKey: "AIzaSyAGVhgI7qM0m821HmJYEVd5E6CAchP-NOE",
  authDomain: "programacion32022.firebaseapp.com",
  projectId: "programacion32022",
  storageBucket: "programacion32022.appspot.com",
  messagingSenderId: "162528676000",
  appId: "1:162528676000:web:f69b299c6fbdae688ae1c5"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore()

