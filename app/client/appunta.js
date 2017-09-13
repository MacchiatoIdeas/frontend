import React from 'react';
import {Route, Redirect, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store, {history} from './store';

import {render} from 'react-dom';

import './style/index.css';
import './style/temp.css';
import './style/icons.css';

import Login from "./components/Auth/Login";
import Portal from "./components/Portal/Portal";
import Site from "./components/Site/Site";

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/portal'/>
        <Route path="/login" component={Login}/>
        <Route path="/site" component={Site}/>
        <Route path="/portal" component={Portal}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

render(router, document.getElementById('root'));
