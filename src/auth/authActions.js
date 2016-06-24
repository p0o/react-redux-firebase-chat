import * as types from './authActionTypes';
import { authConfig } from './../config';

function signInSuccess(uid, displayName) {
  return {
    type: types.SIGNIN_SUCCESS,
    uid,
    displayName
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
        const { user } = result;
        dispatch(signInSuccess(user.uid, user.displayName))
      })
      .catch((error) => {
        dispatch(signInError(error.message))
      });
  }
}
