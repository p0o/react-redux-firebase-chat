const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNIN_ERROR = 'SIGNIN_ERROR';
const SIGNIN_IN_PROGRESS = 'SIGNIN_IN_PROGRESS';

function signInSuccess(uid, displayName) {
  return {
    type: SIGNIN_SUCCESS,
    uid,
    displayName
  }
}

function signInInProgress() {
  return {
    type: SIGNIN_IN_PROGRESS
  }
}

function signInError(errorMessage) {
  return {
    type: SIGNIN_ERROR,
    errorMessage
  }
}

export function signIn() {
  return (dispatch) => {
    dispatch(signInInProgress());

    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');

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
