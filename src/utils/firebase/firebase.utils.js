import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChPN_eEEfptzP-3iFfe93gDmCZz_nhs9I",
    authDomain: "crwn-clothing-e-commerce-v2.firebaseapp.com",
    projectId: "crwn-clothing-e-commerce-v2",
    storageBucket: "crwn-clothing-e-commerce-v2.appspot.com",
    messagingSenderId: "407281648500",
    appId: "1:407281648500:web:97e16fb57928272708a221"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
    signInWithPopup(
        auth,
        googleProvider);

export const signInWithGoogleRedirect = () =>
    signInWithRedirect(
        auth,
        googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}) => {

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exits) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });

        } catch (error) {
            console.log("there is an error creating a user", error.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}