// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCiTgwY4X28iN8AeygO7E_0ZVXifEyx93w",
    authDomain: "gigaservices-20c0b.firebaseapp.com",
    databaseURL: "https://gigaservices-20c0b.firebaseio.com",
    projectId: "gigaservices-20c0b",
    storageBucket: "",
    messagingSenderId: "448734134799",
    appId: "1:448734134799:web:75a080d011d0c3ea9dd97a"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const  fbx = firebase;


