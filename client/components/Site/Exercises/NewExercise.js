import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import SubjectBox from '../SubjectBox';
import UnitSidebar from "../Unit/UnitSidebar";
import UnitPageTitle from "../Unit/UnitPageTitle";

import NewAlternatives from "./NewAlternatives";
import NewMatching from "./NewMatching";


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
    let {filter} = this.props.match.params;
    filter = "Creando nuevo ejercicio";
    console.log('NEW EXERCISES');
    const {unit} = this.props;
    const {field} = unit;
    let {exercises} = this.props;

    return (
      <div>
        <div className="col-sm-3">
          <SubjectBox subject={unit.subject}/>

          <div className="playlist playlist-compact" style={{marginBottom: '8px'}}>
            <div className="playlist-item">
              <NavLink to={`/site/units/${unit.id}/contents`} exact>
                <div className="playlist-item-body">
                  Contenido
                </div>
              </NavLink>
            </div>

            <div className="playlist-item">
              <NavLink to={`/site/units/${unit.id}/exercises`} exact>
                <div className="playlist-item-body">
                  Ejercicios
                </div>
              </NavLink>
            </div>
          </div>

          <UnitSidebar type="exercises" unit={unit}/>
        </div>
        <div className="col-sm-9">
          <UnitPageTitle filter={filter}/>
          <div className="row">
            <div className="col-sm-12">
              <div className="box box-fill">
                <div className="box-body">
                  {this.showContent()}
                  <div className="clearfix"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
