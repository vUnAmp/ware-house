import React, { useState, useEffect } from 'react';
import { auth, handleUserData } from '../../firebase/utils';

import { useHistory } from 'react-router-dom';
import FormInput from '../Shared/FormInput';
import Button from '../Shared/Button';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(true);

  const history = useHistory();
  const { currentUser } = useSelector(mapState);

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        handleUserData(userAuth);

        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(currentUser);
    if (currentUser === null) setIsAuth(!isAuth);

    return () => {
      setIsAuth(true);
    };
  }, []);
  console.log(isAuth);
  return (
    <>
      {currentUser ? (
        <h1> hello...</h1>
      ) : (
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
      )}
    </>
  );
};

export default SignIn;
