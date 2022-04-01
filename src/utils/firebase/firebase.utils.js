import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyChPN_eEEfptzP-3iFfe93gDmCZz_nhs9I",
    authDomain: "crwn-clothing-e-commerce-v2.firebaseapp.com",
    projectId: "crwn-clothing-e-commerce-v2",
    storageBucket: "crwn-clothing-e-commerce-v2.appspot.com",
    messagingSenderId: "407281648500",
    appId: "1:407281648500:web:97e16fb57928272708a221"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

