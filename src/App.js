import './App.scss';
import React, { useEffect } from 'react';
import './style/main.scss';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Registration from './pages/Registration';
import AboutUs from './pages/About';
import { handleUserData, auth } from './firebase/utils';

// redux
import { useSelector } from 'react-redux';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function App() {
  const { currentUser } = useSelector(mapState);
  useEffect(() => {
    if (!currentUser) {
      auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          handleUserData(userAuth);
          console.error('Effec from App.js');
        }
      });
    }
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
