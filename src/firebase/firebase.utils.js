import firebase from 'firebase/app';
//for database
import 'firebase/firestore';
//for auth
import 'firebase/auth';

//This config object will be different for different projects. We get it from firebase
const config = {
    apiKey: "AIzaSyBdLQHK5vyMPz29Jm8j95-JEldjoMgSR9I",
    authDomain: "saluja-products.firebaseapp.com",
    databaseURL: "https://saluja-products.firebaseio.com",
    projectId: "saluja-products",
    storageBucket: "saluja-products.appspot.com",
    messagingSenderId: "337775101389",
    appId: "1:337775101389:web:8982fb1d17d7fbeca5b084",
    measurementId: "G-J7P9Y5X4TP"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) {//When we sign out, userAuth gets null
        return;
    }
    
    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    //create all object there
    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  //This means that we always want the 
  provider.setCustomParameters({prompt: 'select_account'});

  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;