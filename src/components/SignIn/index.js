import React, { useState } from 'react';
import { auth } from '../../firebase/utils';

import { useHistory } from 'react-router-dom';
import FormInput from '../Shared/FormInput';
import Button from '../Shared/Button';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
        console.log('login successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSignIn} className="loginForm formWrap">
      <h3>Login</h3>
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

export default SignIn;
