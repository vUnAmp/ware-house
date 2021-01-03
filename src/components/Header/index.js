import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

const Header = (props) => {
  const { currentUser } = props;
  return (
    <div className="boxFlex headerWrap">
      <Link to="/">Home</Link>
      {currentUser ? (
        <Link
          to="/"
          onClick={() => {
            auth.signOut();
          }}
        >
          Log Out
        </Link>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>
        </>
      )}
    </div>
  );
};

export default Header;
