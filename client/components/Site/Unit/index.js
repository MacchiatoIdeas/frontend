import React from 'react';
import {Redirect, Route, Switch} from 'react-router';

import {connect} from 'react-redux';

import {getUnitByIdAction} from '../../../actions/units';

import UnitDocuments from './UnitDocuments';
import UnitExercises from './UnitExercises';
import ExerciseDetail from '../Exercises/ExerciseDetail/index';
import NewExercise from '../Exercises/NewExercise/NewExercise';
import BodyLoading from '../../Utilities/BodyLoading/index';
import EditExercise from "../Exercises/EditExercise/EditExercise";

@connect((state, props) => ({
  unit: state.visibleUnit,
}), {
  getUnitByIdAction
})
export default class Unit extends React.Component {
  componentWillMount() {
    this.props.getUnitByIdAction(this.props.match.params.id);
  }

  render() {
    const {unit, history} = this.props;

    if (unit.isLoading) {
      return <BodyLoading/>;
    }

    return (
      <div>
        <Switch>
          <Route path="/site/units/:id/contents" render={({match}) =>
            <UnitDocuments unit={unit} match={match} history={history}/>
          }/>
          <Route path="/site/units/:id/exercises/create" render={({match}) =>
            <NewExercise unit={unit} match={match} history={history}/>
          }/>
          <Route path="/site/units/:id/exercises" render={({match}) =>
            <UnitExercises unit={unit} match={match}/>
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
