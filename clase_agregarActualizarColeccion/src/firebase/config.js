import app from 'firebase/app';
import firebase from 'firebase';

//Aca va la constante de la config de firebase.
const firebaseConfig = {
	apiKey: 'AIzaSyBm1uUdghwFGKlnvrIBFzLTN1WoN_iZIWE',
	authDomain: 'prueba-prog3-4704c.firebaseapp.com',
	projectId: 'prueba-prog3-4704c',
	storageBucket: 'prueba-prog3-4704c.appspot.com',
	messagingSenderId: '395481303112',
	appId: '1:395481303112:web:961dcf490c9d79c3c6707d',
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
