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
export const createUserProfilre = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // console.log("user exists");
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(firestore.doc("users/234kjfsadhfsdkjfsad"));
  console.log(snapShot);
  if (!snapShot.exists) {
    console.log("user created");
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("you have some error creating this account\n", error);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
