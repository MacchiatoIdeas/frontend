import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import SubjectBox from '../SubjectBox';
import ContentBox from '../ContentBox';
import UnitSidebar from "../UnitSidebar";
import UnitPageTitle from "../UnitPageTitle";
import AlternativeExercise from "./AlternativeExercise";


export default class ExerciseDetail extends React.Component {
  render() {
    let {filter} = this.props.match.params;
    console.log('EXERCISE DETAIL');
    const {unit} = this.props;
    const {field} = unit;
    let {exercises} = this.props;

    let exercise = {
      title: 'Título Primer Ejercicio',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque eligendi eos facere illum itaque labore maxime molestias nesciunt, obcaecati optio quis sed sequi, similique soluta tenetur ullam voluptatum! Numquam!',
      author: {
        first_name: 'Marcelo Ignacio',
        last_name: 'Jara Almeyda',
        banner: 'http://www.fotor.com/images2/features/blur/022.jpg'
      },
      alternatives: [
        'Primera Alternativa',
        'Segunda Alternativa',
        'Tercera Alternativa',
        'Cuarta Alternativa',
      ],
      correctAnswer: 2,

    };

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
          <div className="row">
            <div className="col-sm-12">
              <div className="box box-fill">
                <div className="box-body exercise">
                  <h1>{exercise.title}</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, cumque dolor ex fuga odit provident
                    quae quasi vel! Architecto, assumenda atque earum error id nesciunt perspiciatis praesentium quasi
                    quidem quisquam!</p>
                  <AlternativeExercise alternatives={exercise.alternatives}/>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="box box-fill">
                <div className="box-body ">
                  <button className="btn btn-default">Anterior</button>
                  <button className="btn btn-success pull-right">Siguiente ejercicio</button>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="box box-fill">
                <div className="box-body text-center">
                  <h2 className="text-center">Ejercicios recomendados</h2>
                  <h2 className="text-center">...</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
