import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import SubjectBox from '../../SubjectBox';
import UnitSidebar from '../../Unit/UnitSidebar';

import NewAlternatives from './NewAlternatives';
import NewMatching from './NewMatching';
import Options from './Options'


export default class NewExercise extends React.Component {
  constructor(props) {
    super(props);

    this.showContent = this.showContent.bind(this);

    this.state = {
      newAlternatives: false,
      newMatching: false,
    }
  }

  selectOption(option) {
    switch (option) {
      case 'alternatives':
        this.setState({newAlternatives: true});
        break;

      case 'matching':
        this.setState({newMatching: true});
        break;
    }
  }

  showContent() {
    if (!this.state.newAlternatives && !this.state.newMatching) {
      return (
        <div className="col-sm-6 col-sm-offset-3">
          <button type="button" className="btn btn-default btn-block" onClick={() => this.selectOption('alternatives')}>
            Nuevo Ejercicio De
            Alternativas
          </button>
          <button type="button" className="btn btn-default btn-block" onClick={() => this.selectOption('matching')}>
            Nuevo Ejercicio De Términos Pareados
          </button>
        </div>
      )
    } else {
      if (this.state.newAlternatives) {
        return (
          <NewAlternatives/>
        )
      } else if (this.state.newMatching) {
        return (
          <NewMatching/>
        )
      }
    }
  }

  render() {
    return (
      <Switch>
        <Route path="/site/units/:id/exercise/create/alternatives" component={NewAlternatives}/>
        <Route path="/site/units/:id/exercise/create/matching" component={NewMatching}/>
        <Route render={({match}) =>
          <Options unit={this.props.unit} match={match}/>
        }/>
      </Switch>
    )
  }
}
