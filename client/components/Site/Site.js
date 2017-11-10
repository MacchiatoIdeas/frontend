import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Body from '../Body';
import Subject from './Subject/index';
import Document from './Document';
import Subjects from './Subjects';
import Unit from './Unit/index';
import Guide from './Guide/index';
import Teacher from "./Users/Teacher/Index";
import NewExercise from './Exercises/NewExercise/NewExercise';
import ExerciseEdit from './Exercises/EditExercise/EditExercise';
import ExerciseDetail from './Exercises/ExerciseDetail/index';
import {connect} from 'react-redux';

@connect(state => ({
  auth: state.auth,
}))
export default class Site extends React.Component {
  render() {
    if (!this.props.auth.isAuthenticated) {
      return <Redirect to="/login"/>
    }

    return (
      <div>
        <Navbar backgroundColor="rgba(255, 255, 255)"/>
        <Body>
          <Switch>
            <Route path="/site/subjects/:id" component={Subject}/>
            <Route path="/site/units/:id" component={Unit}/>

            <Route path="/site/contents/:id" component={Document}/>

            <Route exact path="/site/exercises/:id" component={ExerciseDetail}/>
            <Route exact path="/site/exercises/:id/edit" component={ExerciseEdit}/>

            <Route path="/site/guides/:id" component={Guide}/>
            <Route path="/site/teachers/:id" component={Teacher}/>
            <Route component={Subjects}/>
          </Switch>
        </Body>
      </div>
    )
  }
}
