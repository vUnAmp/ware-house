import React, { useState } from 'react';
import { auth } from '../../firebase/utils';

import { useHistory } from 'react-router-dom';
import FormInput from '../Shared/FormInput';
import Button from '../Shared/Button';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        history.push('/');
        console.log('login successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSignUp} className="loginForm formWrap">
      <h3>Registration</h3>
      <FormInput
        value={name}
        handleChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Email"
        required
      />
      <FormInput
        value={email}
        handleChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="Email"
        required
      />

      <FormInput
        value={password}
        handleChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="password"
        required
      />

      <Button>Submit</Button>
    </form>
  );
};

export default SignUp;
