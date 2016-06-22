import * as types from './messageActionTypes';

export const sendMessage = (uid, message, createdAt) => {
  return {
    type: types.SEND_MESSAGE,
    uid,
    message,
    createdAt
  }
};

export const sendMessageSuccess = () => {
  return {
    type: types.SEND_MESSAGE_SUCCESS
  }
};

export const sendMessageError = () => {
  return {
    type: types.SEND_MESSAGE_ERROR
  }
};
