import Rebase from 're-base';
import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyDtF8e7XcIYu5FKDb69RVMtNOPdgHwvz34",
    authDomain: "catch-of-the-day-jai-marothiya.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jai-marothiya-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export {firebaseApp};

//this is default export
export default base;