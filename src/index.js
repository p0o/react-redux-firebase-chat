import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import reducers from './app/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import { firebaseConfig } from './config';


const isDevelopment = process.env.NODE_ENV === 'development';

if (window.firebase) {
  firebase.initializeApp(firebaseConfig);
}

const loggerMiddleware = createLogger();
const reduxMiddlewares = isDevelopment ?
  [thunk, loggerMiddleware]:
  [thunk];

const store = createStore(
  reducers,
  applyMiddleware.apply(undefined, reduxMiddlewares)
);

// Dispatch initialization action here

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('#react-container')
);
