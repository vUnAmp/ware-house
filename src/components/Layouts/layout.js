import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { auth } from '../../firebase/utils';

// redux

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/User/user.actions';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Layout = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
    const authListener = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(setCurrentUser(userAuth));

        //  Need to implement this one.
        // to get Info userAuth from firestore.
        // Then dispatch to store
      } else {
        dispatch(setCurrentUser(userAuth));

        console.log(`user is not logged`);
      }
    });
    return () => {
      authListener();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      {props.children}
    </div>
  );
};

export default Layout;
