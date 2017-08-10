import React from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store, {history} from './store';

import {render} from 'react-dom';

import './style/index.css';

import Site from './components/Site';
import Portal from "./components/Portal2";

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Portal}/>
        <Route exact path="/site" component={Site}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

render(router, document.getElementById('root'));
