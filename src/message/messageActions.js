import * as types from './messageActionTypes';

export const retrieveMessage = ({ uid, displayName, message }) => {
  return {
    type: types.RETRIEVE_MESSAGE,
    uid,
    displayName,
    message
  }
};

export const sendMessageInProgress = (payload) => {
  return {
    type: types.SEND_MESSAGE,
    ...payload
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
    const { displayName } = getState().users[uid];

    if (uid !== 0) {
      dispatch( sendMessageInProgress({ uid, displayName, message}) );

      firebase.database().ref('messages').push({
        uid,
        displayName,
        message,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      });
    } else {
      dispatch( sendMessageError() );
    }
  }
};
