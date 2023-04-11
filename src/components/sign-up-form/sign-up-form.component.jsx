import { useState } from "react";
import { createGoogleAuthUserWithEmailandPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    
    try {
      const { user } = await createGoogleAuthUserWithEmailandPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      console.log('Success')
    } catch(err) {
      alert(err)
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} required />
        <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required />
        <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required />
        <FormInput label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm