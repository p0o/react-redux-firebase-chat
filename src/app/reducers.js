import { combineReducers } from 'redux';
import * as authReducers from './../auth/authReducers';
import * as messageReducers from './../message/messageReducers';

export default combineReducers({
  auth: authReducers.auth,
  userMessage: messageReducer.userMessage
});
