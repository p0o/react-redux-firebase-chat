import React from 'react';
import { sendMessage } from './messageActions';

let myInput;

export default ({ dispatch }) => {
  return (
    <input
      type="text"
      ref={ (ref) => myInput = ref }
      onKeyUp={ ({ keyCode }) => {
        if(keyCode === 13) {
          dispatch(sendMessage(myInput.value));
          myInput.value = '';
        }
      } }
    />
  );
};
