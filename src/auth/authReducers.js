export default function users(state = {}, action) {
  switch(action.type) {
    case 'USER_SIGNED_IN':
      const { id, name } = action;
      return {
        id,
        name
      }
    default:
      return state;
  }
}
