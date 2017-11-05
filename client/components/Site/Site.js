import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Body from '../Body';
import Subject from './Subject/index';
import Content from './Document';
import Subjects from './Subjects';
import Unit from './Unit/index';
import Guide from './Guide/index';
import NewExercise from './Exercises/NewExercise/NewExercise';
import ExerciseEdit from './Exercises/EditExercise/EditExercise';
import ExerciseDetail from './Exercises/ExerciseDetail/index';

export default class Site extends React.Component {
  render() {
    return (
      <div>
        <Navbar backgroundColor="rgba(255, 255, 255)"/>
        <Body>
          <Switch>
            <Route path="/site/subjects/:id" component={Subject}/>
            <Route path="/site/units/:id" component={Unit}/>
            <Route path="/site/contents/:id" component={Content}/>

            <Route exact path="/site/exercises/create" component={NewExercise}/>
            <Route exact path="/site/exercises/:id" component={ExerciseDetail}/>
            <Route exact path="/site/exercises/:id/edit" component={ExerciseEdit}/>

            <Route path="/site/guides/:id" component={Guide}/>
            <Route component={Subjects}/>
          </Switch>
        </Body>
      </div>
    )
  }
}
