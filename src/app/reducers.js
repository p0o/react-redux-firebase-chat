import { combineReducers } from 'redux';
import users from './../auth/authReducers';

export default combineReducers(
  users
);

