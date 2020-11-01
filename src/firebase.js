import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDERIGCrOoxyKdAX2oN2Ui7SCzqwLeDgKc",
    authDomain: "food-api-7552e.firebaseapp.com",
    databaseURL: "https://food-api-7552e.firebaseio.com",
    projectId: "food-api-7552e",
    storageBucket: "food-api-7552e.appspot.com",
    messagingSenderId: "624111513883",
    appId: "1:624111513883:web:53e02666087bbfeba463be",
    measurementId: "G-Y68H90Y2C7"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
