import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

import {render} from 'react-dom';

// Import css
import css from 'bootstrap-webpack';

// Import Components
import App from './components/App';
import FieldList from './components/FieldList';
import Field from "./components/Field";
import Unit from "./components/Unit";
import SubUnit from "./components/SubUnit";
import Content from "./components/Content";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={FieldList}/>
        <Route path="/field/:slug" component={Field}/>
        <Route path="/unit/:slug" component={Unit}/>
        <Route path="/sub-unit/:slug" component={SubUnit}/>
        <Route path="/content/:id" component={Content}/>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
