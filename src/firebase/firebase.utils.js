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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error when creating user ', error);

        }
        console.log(snapshot);
    }
    return userRef;
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items
        }
    })
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
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