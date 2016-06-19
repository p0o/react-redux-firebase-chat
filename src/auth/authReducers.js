
const initialState = {
  isUserSignedIn: false,
  isInProgress: false,
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
    default:
      return state;
  }
}
