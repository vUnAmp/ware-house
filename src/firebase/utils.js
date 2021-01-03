import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from './config';

// Initialze App
firebase.initializeApp(firebaseConfig);

// Export auth and firestore

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Export some function

export const handleUserData = () => {};
