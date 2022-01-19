import react from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
