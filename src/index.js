import { render } from 'react-dom';
import reducer from './reducers';
import { Provider } from 'redux-react';
import { createStore } from 'redux';

const store = createStore(reducer);

// Dispatch initialization action here

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('#react-container')
);
