import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';

import Button, { BUTTON_TYPES } from '../button/Button';

import FormInput from '../form-input/FormInput';

import './sign-up-form.styles.scss';

const defaultFormfields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const dispatch = useDispatch();

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
            dispatch(signUpStart(email, password, displayName))
            setFormFields(defaultFormfields);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    name='displayName'
                    onChange={handleChange}
                    value={displayName} />

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

                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    name='confirmPassword'
                    onChange={handleChange}
                    value={confirmPassword} />
                <Button
                    buttonType={BUTTON_TYPES.base}
                    type='submit'>
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm;