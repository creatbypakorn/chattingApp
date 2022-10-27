import firebase from 'firebase/compat/app'; //v9
import "firebase/compat/database";

const config = {
    apiKey: "AIzaSyBm7YTy3SUQwya2GJrAm1w4KHf4PWMDnYc",
    authDomain: "vue-db-chat.firebaseapp.com",
    projectId: "vue-db-chat",
    storageBucket: "vue-db-chat.appspot.com",
    messagingSenderId: "196283966492",
    appId: "1:196283966492:web:0358ac0cf122ac6c87ebd9",
    measurementId: "G-ZLHVG7HVJT"
}

const db = firebase.initializeApp(config);
export default db;