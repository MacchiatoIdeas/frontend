import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import SubjectBox from './SubjectBox';
import ContentBox from './DocumentBox';
import UnitSidebar from "./UnitSidebar";
import UnitPageTitle from "./UnitPageTitle";


export default class UnitExercises extends React.Component {
  render() {
    let {filter} = this.props.match.params;
    const {unit} = this.props;
    const {field} = unit;
    let {exercises} = this.props;

    exercises = [
      {
        id: 0,
        title: 'Título primer ejercicio',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque eligendi eos facere illum itaque labore maxime molestias nesciunt, obcaecati optio quis sed sequi, similique soluta tenetur ullam voluptatum! Numquam!',
        author: {
          first_name: 'Marcelo Ignacio',
          last_name: 'Jara Almeyda',
          banner: 'http://www.fotor.com/images2/features/blur/022.jpg'
        }
      },
      {
        id: 1,
        title: 'Título segundo ejercicio',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto assumenda autem cupiditate delectus dignissimos, iste laborum nesciunt nobis, officia officiis perferendis quae quaerat quo, sapiente suscipit ut vel voluptatibus.',
        author: {
          first_name: 'Hernan Raul',
          last_name: 'Herreros Niño',
          banner: 'https://image.freepik.com/free-photo/blurred-background-customer-at-cafe-blur-background-with-bok_1356-94.jpg'
        }
      }
    ];

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
          <Link to={`/site/units/${unit.id}/new/exercise`} className="head-link"><span className="glyphicon glyphicon-plus"/> Crear Nuevo Ejercicio</Link>
          <UnitPageTitle filter={filter}/>

          <div className="row">
            {exercises.map((exercise, i) =>
              <div className="col-sm-12" key={i}>
                <div className="box box-fill">
                  <Link to={`/site/units/${unit.id}/exercise/${exercise.id}`}>
                    <div className="box-body box-body-min">
                      <h1>{exercise.title}</h1>
                      <summary>{exercise.text}</summary>
                    </div>

                    <div style={{position: "relative"}}>
                      <div className="backgrounded" style={{backgroundImage: `url("${exercise.author.banner}")`}}/>
                      <div className="box-footer box-footer-stylized">
                        <h3 className="pull-left">
                          <small>Creado por:</small>
                          {exercise.author.first_name} {exercise.author.last_name}
                        </h3>
                        <h3 className="pull-right difficulty">
                          <div>
                            <small className="pull-right">Dificultad</small>
                          </div>
                          <span className="glyphicon glyphicon-star-empty"></span>
                          <span className="glyphicon glyphicon-star-empty"></span>
                          <span className="glyphicon glyphicon-star"></span>
                          <span className="glyphicon glyphicon-star"></span>
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
