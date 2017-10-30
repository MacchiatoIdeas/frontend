import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Create from './Create';
import Course from './Course/Course';

export default class Courses extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/portal/courses/create" component={Create}/>
        <Route path="/portal/courses/:id" component={Course}/>
      </Switch>
    )
  }
}
