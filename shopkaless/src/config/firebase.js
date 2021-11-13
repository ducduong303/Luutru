import firebase from "firebase";
firebase.initializeApp({
    apiKey: "AIzaSyAdVv3vnrf4iM6Meu8lYXyGd5l1xs-1Mn0",
    authDomain: "kalles-f6d2f.firebaseapp.com",
    databaseURL: "https://kalles-f6d2f.firebaseio.com",
    projectId: "kalles-f6d2f",
    storageBucket: "kalles-f6d2f.appspot.com",
    messagingSenderId: "203057195978",
    appId: "1:203057195978:web:9b0309504eb8e65926fd33",
    measurementId: "G-R7NWNPTT9V"
})
const auth = firebase.auth();
export { auth };