import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCsAE4aQPyvV4sn3jhWWppmo6WpO9YIKlQ",
    authDomain: "crwn-clothing-61a9d.firebaseapp.com",
    databaseURL: "https://crwn-clothing-61a9d.firebaseio.com",
    projectId: "crwn-clothing-61a9d",
    storageBucket: "crwn-clothing-61a9d.appspot.com",
    messagingSenderId: "939900944638",
    appId: "1:939900944638:web:98e2a7b186e5a011c9e5af"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export default firebase;