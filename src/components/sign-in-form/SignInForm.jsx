import { useState, useContext } from 'react';

import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';

import { UserContext } from '../contexts/UserContext';

import './sign-in-form.styles.scss';

const defaultFormfields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormfields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthWithEmailAndPassword(email, password);
            setCurrentUser(user);
            setFormFields(defaultFormfields);
        } catch (error) {

            switch (error.code) {
                case 'auth/wrong-password': {
                    alert('incorrect password for email');
                    break;
                }
                case 'auth/user-not-found': {
                    alert('this user was not found');
                    break;
                }
                default: {
                    console.error(error)
                }
            }
        }
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    name='email'
                    onChange={handleChange}
                    value={email} />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    name='password'
                    onChange={handleChange}
                    value={password} />
                <div className='buttons-container'>
                    <Button
                        type='submit'
                    >
                        Sign In
                    </Button>
                    <Button
                        type='button'
                        buttonType='google'
                        onClick={signInWithGoogle}>
                        GOOGLE SIGN IN
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;