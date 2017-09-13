import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Redirect, Route, Switch} from "react-router";

import {connect} from 'react-redux';

import {getUnitById} from '../../actions/units';
import {getFieldById} from '../../actions/subjects';

import FieldBox from './FieldBox';
import UnitContents from "./UnitContents";
import UnitExercises from "./UnitExercises";
import UnitSidebar from "./UnitSidebar";

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

  let field = state.fields[unit.field_of_study];
  if (!field) {
    return {isFetching: true, unit, contents};
  }

  return {
    isFetching: false,
    unit,
    field,
  }
}, {
  getUnitById,
  getFieldById,
})
export default class Field extends React.Component {
  loadData() {
    const {id} = this.props.match.params;

    if (!this.props.unit || !this.props.contents) {
      this.props.getUnitById(id);
      return;
    }

    if (!this.props.field) {
      this.props.getFieldById(this.props.unit.field_of_study);
    }
  }

  render() {
    if (this.props.isFetching) {
      this.loadData();
      return null;
    }

    const {unit, field} = this.props;
    unit.field = field;

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
