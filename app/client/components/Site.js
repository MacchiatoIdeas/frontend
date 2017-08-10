import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Navbar from './Navbar';
import FieldList from './FieldList';
import Field from './Field';
import Unit from './Unit';
import Content from './Content';

export default class Site extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="container" style={{ marginTop: "32px" }}>
          <Switch>
            <Route path="/site/fields/:slug" component={Field}/>
            <Route path="/site/units/:slug" component={Unit}/>
            <Route path="/site/content/:id" component={Content}/>
            <Route component={FieldList}/>
          </Switch>
        </div>
      </div>
    )
  }
}
