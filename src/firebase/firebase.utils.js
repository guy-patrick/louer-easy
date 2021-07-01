import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyB5vuCt-0-mirrlvOY9USBf2u1VUEnY3Aw",
  authDomain: "louereasy-f7ba9.firebaseapp.com",
  databaseURL: "https://louereasy-f7ba9.firebaseio.com",
  projectId: "louereasy-f7ba9",
  storageBucket: "louereasy-f7ba9.appspot.com",
  messagingSenderId: "1091950888843",
  appId: "1:1091950888843:web:42bbf789fabb42bb92918e",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`error creating user ${error.message}`);
    }
  }

  return userRef;
};

export const convertRentalsSnaphotToMap = (rentalsSnapshot) => {
  const transformedCollection = rentalsSnapshot.docs.map((doc) => doc.data());
  return transformedCollection.reduce((acc, obj) => {
    const { id } = obj;
    acc[id] = obj;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export default firebase;
