// src/firebaseConfig.js
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCGsgh78peQll7lNzi0lvAE5x8eG4YovuE",
	authDomain: "gardenr-367db.firebaseapp.com",
	projectId: "gardenr-367db",
	storageBucket: "gardenr-367db.appspot.com",
	messagingSenderId: "1085191007159",
	appId: "1:1085191007159:web:57e4a8fb3491c243e1d632",
	measurementId: "G-ZT5F27CG6P",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
