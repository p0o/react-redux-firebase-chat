
export function auth(state = {}, action) {
  switch(action.type) {
    case 'SIGNIN_SUCCESS':
      const { userId } = action;
      return {
        userId
      };
    default:
      return state;
  }
}
