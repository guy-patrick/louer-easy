import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyB5vuCt-0-mirrlvOY9USBf2u1VUEnY3Aw",
    authDomain: "louereasy-f7ba9.firebaseapp.com",
    databaseURL: "https://louereasy-f7ba9.firebaseio.com",
    projectId: "louereasy-f7ba9",
    storageBucket: "louereasy-f7ba9.appspot.com",
    messagingSenderId: "1091950888843",
    appId: "1:1091950888843:web:42bbf789fabb42bb92918e"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config)
} else {
    firebase.app()
}

export const convertRentalsSnaphotToMap = rentalsSnapshot => {
    const transformedCollection = rentalsSnapshot
        .docs.map(doc => doc.data())
    return transformedCollection.reduce((acc, obj) => {
        const { id } = obj;
        acc[id] = obj;
        return acc;
    }, {})
}

/* firebase.analytics(); */

export const db = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();