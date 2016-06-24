import { combineReducers } from 'redux';
import * as authReducers from './../auth/authReducers';
import * as messageReducers from './../message/messageReducers';
import * as usersReducers from './../user/userReducers';

export default combineReducers({
  auth: authReducers.auth,
  userMessage: messageReducers.userMessage,
  messages: messageReducers.messages,
  users: usersReducers.users
});
