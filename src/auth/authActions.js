const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNIN_ERROR = 'SIGNIN_ERROR';
const SIGNIN_IN_PROGRESS = 'SIGNIN_IN_PROGRESS';

function signInSuccess(userId) {
  return {
    type: SIGNIN_SUCCESS,
    userId: userId
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

export function signInUser() {
  return (dispatch) => {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');

    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const { accessToken } = result.credential;
        const { user } = result;
        console.log(user);
        dispatch(signInSuccess(user.id))
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(signInError(error.message))
      });
  }
}
