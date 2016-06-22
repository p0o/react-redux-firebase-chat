import React from 'react';
import { sendMessage } from './messageActions';

export default ({ dispatch }) => {
  return (
    <input type="text" onKeyUp={ ({ keyCode }) => {
      if(keyCode === 13) {
        dispatch(sendMessage('hey'));
      }
    }}/>
  );
};
