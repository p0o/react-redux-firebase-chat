const initialState = {
  id: 0,
  name: ''
};

export function auth(state = {}, action) {
  switch(action.type) {
    case 'SIGNIN_SUCCESS':
      const { id, name } = action;
      return {
        id,
        name
      };
    default:
      return state;
  }
}
