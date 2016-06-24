import * as types from './usersActionTypes';

export const users = (state = {}, action) => {
  switch(action.type) {
    case types.USER_LOGGED_IN:
      const { uid, email, photoURL, displayName, lastTimeLoggedIn } = action;

      return {
        ...state,
        [uid]: {
          email,
          photoURL ,
          displayName,
          lastTimeLoggedIn
        }
      };
    default:
      return state;
  }
};
