import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from './config';

// Redyx

import { store } from '../redux/createStore';
import { setCurrentUser } from '../redux/User/user.actions';

// Initialze App
firebase.initializeApp(firebaseConfig);

// Export auth and firestore

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Export some function

export const handleUserData = (userAuth) => {
  firestore
    .collection('users')
    .doc(userAuth.uid)
    .get()
    .then((doc) => {
      return doc.data();
    })
    .then((x) => {
      console.log(x);
      const { email, userRoles } = x;
      store.dispatch(setCurrentUser(email, userRoles));
    })
    .catch((err) => {
      console.log(err);
    });
};
