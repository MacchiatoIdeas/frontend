import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Redirect, Route, Switch} from 'react-router';

import {connect} from 'react-redux';

import {getUnitById} from '../../actions/units';
import {getSubjectById} from '../../actions/subjects';

import UnitContents from './UnitContents';
import UnitExercises from './UnitExercises';

@connect((state, props) => {
  const {id} = props.match.params;

  let unit = {...state.units[id]};
  if (!unit) {
    return {isFetching: true};
  }

  let contents = unit.contents;
  if (!contents) {
    return {isFetching: true, unit};
  }
  unit.contents = unit.contents.map(id => state.contents[id]);
  unit.contents = unit.contents.map(content => ({...content, author: state.authors[content.author]}));

  let subject = state.subjects[unit.subject];
  if (!subject) {
    return {isFetching: true, unit, contents};
  }
  unit.subject = subject;

  return {
    unit,
  }
}, {
  getUnitById,
  getSubjectById,
})
export default class Field extends React.Component {
  loadData() {
    const {id} = this.props.match.params;

    if (!this.props.unit || !this.props.contents) {
      return this.props.getUnitById(id);
    }

    if (!this.props.field) {
      this.props.getSubjectById(this.props.unit.subject);
    }
  }

  render() {
    if (this.props.isFetching) {
      this.loadData();
      return null;
    }

    const {unit} = this.props;

    return (
      <div>
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

            <Route path="/site/units/:id/exercises" render={({ match }) => (
              <Redirect to={`/site/units/${match.params.id}/exercises/trending`} />
            )}/>
            <Route path="/site/units/:id" render={({ match }) => (
              <Redirect to={`/site/units/${match.params.id}/contents/trending`} />
            )}/>
          </Switch>
        </div>
      </div>
    )
  }
}
