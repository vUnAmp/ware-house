import userTypes from './user.types';

import { takeLatest, call, all, put } from 'redux-saga/effects';

import { auth, handleUserData } from '../../firebase/utils';

export function* signInUser({ payload: { email, password } }) {
  const userAuth = yield auth.signInWithEmailAndPassword(email, password);
  // console.log(userAuth);
  yield call(handleUserData, userAuth.user);
  //     .then((userAuth) => {
  //       //  yield call(handleUserData,userAuth);
  //       // history.push('/');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
}
export function* onEmailSignIn() {
  yield takeLatest(userTypes.SIGN_IN_USER, signInUser);
  yield console.log('here is function');
}

export default function* userSagas() {
  yield all([call(onEmailSignIn)]);
}
