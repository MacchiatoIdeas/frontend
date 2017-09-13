import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Navbar from '../Navbar';
import Subject from './Subject';
import Content from './Content';
import Subjects from './Subjects';
import Unit from './Unit';

export default class Site extends React.Component {
  render() {
    return (
      <div>
        <Navbar backgroundColor="rgba(255, 255, 255)" />

        <div className="container" style={{ marginTop: '32px' }}>
          <Switch>
            <Route path="/site/subjects/:id" component={Subject}/>
            <Route path="/site/units/:id" component={Unit}/>
            <Route path="/site/contents/:id" component={Content}/>
            <Route component={Subjects}/>
          </Switch>
        </div>
      </div>
    )
  }
}
