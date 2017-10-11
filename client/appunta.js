import React from 'react';
import {Route, Redirect, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import {render} from 'react-dom';

import './style/index.css';
import './style/custom.css';
import './style/temp.css';
import './style/icons.css';

import Login from './components/Auth/Login';
import Portal from './components/Portal/Portal';
import Site from './components/Site/Site';
import Editor from './components/Editor/Editor';
import GuidesEditor from './components/GuidesEditor/GuidesEditor'
import Register from './components/Auth/Register';

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/portal"/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/site" component={Site}/>
        <Route path="/portal" component={Portal}/>
        <Route path="/editor" component={Editor}/>
        <Route path="/guides-editor" component={GuidesEditor}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

render(router, document.getElementById('root'));
