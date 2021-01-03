import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { auth } from '../../firebase/utils';

const Layout = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const authListener = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setCurrentUser(userAuth);
        console.log(`User is logged ${userAuth}`);
      } else {
        setCurrentUser(null);
        console.log(`user is not logged`);
      }
    });
    return () => {
      authListener();
    };
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      {props.children}
    </div>
  );
};

export default Layout;
