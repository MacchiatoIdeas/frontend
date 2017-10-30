import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Course from './Course/index';

export default class Courses extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/portal/courses/:id" component={Course}/>
      </Switch>
    )
  }
}
