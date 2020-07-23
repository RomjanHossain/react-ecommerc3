import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCMZOojGeOcH1IB1QlMXWQEMheKE06Sv6Q",
  authDomain: "ecommerce-af92c.firebaseapp.com",
  databaseURL: "https://ecommerce-af92c.firebaseio.com",
  projectId: "ecommerce-af92c",
  storageBucket: "ecommerce-af92c.appspot.com",
  messagingSenderId: "903761280302",
  appId: "1:903761280302:web:6ee0be2011d05109924ebf",
  measurementId: "G-HXKXCSPD5J",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
