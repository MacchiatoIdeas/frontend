import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

import {render} from 'react-dom';

import './style/index.css';
import './style/custom.css';
import './style/temp.css';
import './style/icons.css';

import App from './components/App';

const router = (
  <Provider store={store}>
    <App/>
  </Provider>
);

render(router, document.getElementById('root'));
