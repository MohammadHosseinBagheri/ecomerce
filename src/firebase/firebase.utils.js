import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA_lYJrgV8p2s-B3uEwVCjWLHCsg3hgFno",
  authDomain: "ecomerce-b9f6f.firebaseapp.com",
  databaseURL: "https://ecomerce-b9f6f.firebaseio.com",
  projectId: "ecomerce-b9f6f",
  storageBucket: "ecomerce-b9f6f.appspot.com",
  messagingSenderId: "385994434726",
  appId: "1:385994434726:web:254d8603c3927beef66c67",
  measurementId: "G-RJSTC8ZXRF",
};
export const createUserProfile = async (user, otherData) => {
  if (!user) return;
  const { uid } = await user;
  console.log(uid);
  let userAuth = fireStore.doc(`users/${uid}`);
  // console.log(uid)
  const snapShot = await userAuth.get();
  console.log(snapShot.exists);
  if (!snapShot.exists) {
    const createdAt = new Date();
    const { displayName, email } = await user;
    await userAuth.set({
      displayName,
      email,
      createdAt,
      ...otherData,
    });
  }
  return userAuth;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const fireStore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
