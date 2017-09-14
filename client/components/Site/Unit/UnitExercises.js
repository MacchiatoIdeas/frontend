import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import SubjectBox from '../SubjectBox';
import UnitSidebar from "./UnitSidebar";
import UnitPageTitle from "./UnitPageTitle";


const Stars = ({stars, of}) => {
  return (
    <div>
      {[...new Array(stars)].map((_, i) => <span className="glyphicon glyphicon-star" key={i}/>)}
      {[...new Array(of - stars)].map((_, i) => <span className="glyphicon glyphicon-star-empty" key={i}/>)}
    </div>
  )
};

export default class UnitExercises extends React.Component {
  render() {
    let {filter} = this.props.match.params;
    const {unit} = this.props;

    return (
      <div>
        <div className="col-sm-3">
          <SubjectBox subject={unit.subject}/>
          <UnitSidebar type="exercises" unit={unit}/>
        </div>

        <div className="col-sm-9">
          <Link to={`/site/units/${unit.id}/new/exercise`} className="head-link"><span className="glyphicon glyphicon-plus"/> Crear Nuevo Ejercicio</Link>
          <UnitPageTitle filter={filter}/>

          <div className="row">
            {unit.exercises.map((exercise, i) =>
              <div className="col-sm-12" key={i}>
                <div className="box box-fill">
                  <Link to={`/site/units/${unit.id}/exercise/${exercise.id}`}>
                    <div className="box-body box-body-min">
                      <summary>{exercise.briefing}</summary>
                    </div>

                    <div style={{position: "relative"}}>
                      <div className="backgrounded" style={{backgroundImage: `url("http://www.fotor.com/images2/features/blur/022.jpg")`}}/>
                      <div className="box-footer box-footer-stylized">
                        <h3 className="pull-left">
                          <small>Creado por:</small>
                          Marcelo Jara Almeyda
                        </h3>

                        <h3 className="pull-right difficulty">
                          <div>
                            <small className="pull-right">Dificultad</small>
                          </div>

                          <Stars stars={exercise.difficulty} of={4}/>
                        </h3>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
