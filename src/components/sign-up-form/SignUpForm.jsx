import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormfields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormfields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("The password doesn't match!");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password);

            await createUserDocumentFromAuth(user, { displayName });
            
            setFormFields(defaultFormfields);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input
                    type='text'
                    required
                    name='displayName'
                    onChange={handleChange}
                    value={displayName} />

                <label>Email</label>
                <input
                    type='email'
                    required
                    name='email'
                    onChange={handleChange}
                    value={email} />

                <label>Password</label>
                <input
                    type='password'
                    required
                    name='password'
                    onChange={handleChange}
                    value={password} />

                <label>Confirm Password</label>
                <input
                    type='password'
                    required
                    name='confirmPassword'
                    onChange={handleChange}
                    value={confirmPassword} />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;