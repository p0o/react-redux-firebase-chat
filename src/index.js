import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import reducers from './app/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { firebaseConfig } from './config';

if (window.firebase) {
  firebase.initializeApp(firebaseConfig);
}

const store = createStore(reducers);

// Dispatch initialization action here

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('#react-container')
);
