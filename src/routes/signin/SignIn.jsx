import React from 'react';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/SignUpForm';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <div>I am the sign in page</div>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;