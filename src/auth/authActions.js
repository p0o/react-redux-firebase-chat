import * as types from './authActionTypes';
import { authConfig } from './../config';

function signInSuccess(uid) {
  return {
    type: types.SIGNIN_SUCCESS,
    uid
  }
}

function signInInProgress() {
  return {
    type: types.SIGNIN
  }
}

function signInError(errorMessage) {
  return {
    type: types.SIGNIN_ERROR,
    errorMessage
  }
}

export function signIn() {
  return (dispatch) => {
    dispatch(signInInProgress());

    const provider = new firebase.auth.FacebookAuthProvider();
    authConfig.facebookPermissions.forEach(permission => provider.addScope(permission));

    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const { user: { uid, displayName, photoURL, email } } = result;

        firebase.database().ref(`users/${ uid }`).set({
          displayName,
          photoURL,
          email,
          lastTimeLoggedIn: firebase.database.ServerValue.TIMESTAMP
        });

        dispatch(
          signInSuccess(uid)
        );
      })
      .catch((error) => {
        dispatch(signInError(error.message))
      });
  }
}
