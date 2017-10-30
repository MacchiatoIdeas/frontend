import React from 'react';
import {Redirect, Route, Switch} from 'react-router';

import {connect} from 'react-redux';

import {getUnitById} from '../../../actions/units';

import UnitDocuments from './UnitDocuments';
import UnitExercises from './UnitExercises';
import ExerciseDetail from '../Exercises/ExerciseDetail';
import NewExercise from '../Exercises/NewExercise/NewExercise';

const normalizeContent = (state, id) => {
  return {...state.contents[id], author: state.authors[state.contents[id].author]};
};

const normalizeExercise = (state, id) => {
  return {...state.exercises[id], author: state.authors[state.exercises[id].author]};
};

@connect((state, props) => {
  const {id} = props.match.params;

  let unit = state.units[id];
  if (!unit || !unit.contents || !unit.exercises) {
    return {isFetching: true};
  }

  unit = {
    ...unit,
    contents: unit.contents.map(id => normalizeContent(state, id)),
    exercises: unit.exercises.map(id => normalizeExercise(state, id)),
    subject: state.subjects[unit.subject],
  };

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
      <div>
        <Switch>
          <Route path="/site/units/:id/contents" render={({match}) =>
            <UnitDocuments unit={unit} match={match}/>
          }/>
          <Route path="/site/units/:id/exercises" render={({match}) =>
            <UnitExercises unit={unit} match={match}/>
          }/>
          <Route path="/site/units/:id/exercise/create" render={({match}) =>
            <NewExercise unit={unit} match={match}/>
          }/>
          <Route path="/site/units/:id/exercise/:exerciseId" render={({match}) =>
            <ExerciseDetail unit={unit} match={match}/>
          }/>
          <Route path="/site/units/:id" render={({match}) => (
            <Redirect to={`/site/units/${match.params.id}/contents`}/>
          )}/>
        </Switch>
        <div className="clearfix"/>
      </div>
    )
  }
}
