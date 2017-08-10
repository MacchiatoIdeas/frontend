import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

import {render} from 'react-dom';

import './style/index.css';

import App from './components/App';
import FieldList from './components/FieldList';
import Field from "./components/Field";
import Unit from "./components/Unit";
import Content from "./components/Content";
import Summary from "./components/Summary";
import Portal from "./components/Portal";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/portal" component={Portal}>
          <IndexRoute component={Summary}/>
        </Route>
        <Route path="/fields" component={FieldList}/>
        <Route path="/fields/:slug" component={Field}/>
        <Route path="/unit/:slug" component={Unit}/>
        <Route path="/content/:id" component={Content}/>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
