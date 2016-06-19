
const initialState = {
  isUserSignedIn: false,
  isInProgress: false,
  hasError: false,
  errorMessage: '',
  uid: 0,
  displayName: ''
};

export function auth(state = initialState, action) {
  switch(action.type) {
    case 'SIGNIN_SUCCESS':
      const { uid, displayName } = action;
      return {
        ...state,
        isUserSignedIn: true,
        isInProgress: false,
        uid,
        displayName
      };
    case 'SIGNIN':
      return {
        ...state,
        isInProgress: true
      };
    case 'SIGIN_ERROR':
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
