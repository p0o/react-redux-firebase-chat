import { render } from 'react-dom';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { firebaseConfig } from './config';

if (window.firebase) {
  firebase.initializeApp(firebaseConfig);
}

const store = createStore(reducer);

// Dispatch initialization action here

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('#react-container')
);
