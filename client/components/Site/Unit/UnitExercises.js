import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import SubjectBox from '../SubjectBox';
import UnitSidebar from './UnitSidebar';
import Box from "../../Box";


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
    const {unit} = this.props;

    return (
      <div>
        <section>
          <div className="col-sm-4">
            <SubjectBox subject={unit.subject} showTitle/>
            <UnitSidebar type="exercises" unit={unit}/>
          </div>

          <div className="col-sm-8">
            <Link to={`/site/units/${unit.id}/exercise/create`} className="head-link"><span
              className="glyphicon glyphicon-plus"/> Crear Ejercicio</Link>
            <h2 className="page-header">{unit.name} &raquo; Ejercicios</h2>

            <div className="row">
              <div className="col-sm-12">
                {unit.exercises.map((exercise, i) =>
                  <Box
                    key={exercise.id}
                    title={''}
                    author={exercise.author}
                    date={'25 de Mayo de 2017'}
                    text={exercise.briefing}
                    comments={0}
                    link={`/site/units/${unit.id}/exercise/${exercise.id}`}
                    linkText='Ver Ejercicio'
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
