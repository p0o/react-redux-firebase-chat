import { combineReducers } from 'redux';
import * as authReducers from './../auth/authReducers';

export default combineReducers({
  auth: authReducers.auth
});
