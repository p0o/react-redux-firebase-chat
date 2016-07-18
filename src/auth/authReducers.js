import * as types from './authActionTypes';

const initialState = {
  isUserSignedIn: false,
  isInProgress: false,
  hasError: false,
  errorMessage: '',
  uid: 0
};

export function auth(state = initialState, action) {
  switch(action.type) {
    case types.SIGNIN_SUCCESS:
      const { uid } = action;
      return {
        ...state,
        isUserSignedIn: true,
        isInProgress: false,
        uid
      };
    case types.SIGNIN:
      return {
        ...state,
        isInProgress: true
      };
    case types.SIGNIN_ERROR:
      const { errorMessage } = action;
      return {
        ...state,
        hasError: true,
        errorMessage
      };
    default:
      return state;
  }
}
