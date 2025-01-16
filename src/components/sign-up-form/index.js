import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input";
import Button from "../button";
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value
    });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert('Passwords do not match');

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      
      alert('Thank you for signing up');
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Email already in use, please try again");
      console.error('user signup error', error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
          required
        />
        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
          required
        />
        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
          required
        />
        <FormInput
          label='Confirm Password'
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          required
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
