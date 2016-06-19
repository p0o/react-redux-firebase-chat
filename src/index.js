import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import reducers from './app/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'thunk';
import createLogger from 'redux-logger'
import { firebaseConfig } from './config';

if (window.firebase) {
  firebase.initializeApp(firebaseConfig);
}
const loggerMiddleware = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    loggerMiddleware
  )
);

// Dispatch initialization action here

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('#react-container')
);
