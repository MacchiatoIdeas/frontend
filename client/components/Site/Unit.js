import React from 'react';
import {Redirect, Route, Switch} from 'react-router';

import {connect} from 'react-redux';

import {getUnitById} from '../../actions/units';

import UnitContents from './UnitContents';
import UnitExercises from './UnitExercises';
import ExerciseDetail from "./Exercises/ExerciseDetail";
import NewExercise from "./Exercises/NewExercise";

const normalizeContent = (state, id) => {
  return {...state.contents[id], author: state.authors[state.contents[id].author]};
};

const normalizeExercise = (state, id) => {
  return {...state.exercises[id], author: state.authors[state.exercises[id].author]};
};

@connect((state, props) => {
  const {id} = props.match.params;

  let unit = {...state.units[id]};
  if (!unit || !unit.contents) {
    return {isFetching: true};
  }
  unit.contents = unit.contents.map(id => normalizeContent(state, id));
  unit.exercises = unit.exercises.map(id => normalizeExercise(state, id));
  unit.subject = state.subjects[unit.subject];

  return {
    unit
  }
}, {
  getUnitById
})
export default class Unit extends React.Component {
  componentWillMount() {
    this.props.getUnitById(this.props.match.params.id);
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }

    const {unit} = this.props;

    return (
      <div className="container">
        <h1 className="page-header">
          {unit.name}
          <span className="glyphicon glyphicon-apple pull-right"/>
        </h1>

        <div className="row">
          <Switch>
            <Route path="/site/units/:id/contents/:filter" render={({match}) =>
              <UnitContents unit={unit} match={match}/>
            }/>
            <Route path="/site/units/:id/exercises/:filter" render={({match}) =>
              <UnitExercises unit={unit} match={match}/>
            }/>
            <Route path="/site/units/:id/new/exercise" render={({match}) =>
              <NewExercise unit={unit} match={match}/>
            }/>
            <Route path="/site/units/:id/exercise/:exerciseId" render={({match}) =>
              <ExerciseDetail unit={unit} match={match}/>
            }/>
            <Route path="/site/units/:id/exercises" render={({match}) => (
              <Redirect to={`/site/units/${match.params.id}/exercises/trending`}/>
            )}/>
            <Route path="/site/units/:id" render={({match}) => (
              <Redirect to={`/site/units/${match.params.id}/contents/trending`}/>
            )}/>
          </Switch>
        </div>
      </div>
    )
  }
}
