import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NewAlternatives from './NewAlternatives';
import NewMatching from './NewMatching';
import Options from './Options'


export default class NewExercise extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/site/units/:id/exercises/create/alternatives" component={NewAlternatives}/>
        <Route path="/site/units/:id/exercises/create/matching" component={NewMatching}/>
        <Route render={({match}) =>
          <Options unit={this.props.unit} match={match}/>
        }/>
      </Switch>
    )
  }
}
