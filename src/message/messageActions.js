import * as types from './messageActionTypes';

export const retrieveMessage = ({ uid, message }) => {
  return {
    type: types.RETRIEVE_MESSAGE,
    uid,
    message
  }
};

export const sendMessageInProgress = (uid, message, createdAt) => {
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

export const sendMessage = (message) => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    if (uid !== 0) {
      dispatch( sendMessageInProgress(uid, message, Date.now()) );

      firebase.database().ref('messages').push({
        uid,
        message
      });
    } else {
      dispatch( sendMessageError() );
    }
  }
};
