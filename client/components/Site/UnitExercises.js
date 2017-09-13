import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import FieldBox from './SubjectBox';
import ContentBox from './ContentBox';
import UnitSidebar from "./UnitSidebar";
import UnitPageTitle from "./UnitPageTitle";

export default class UnitContents extends React.Component {
  render() {
    let {filter} = this.props.match.params;

    const {unit} = this.props;
    const {field} = unit;
    let {exercises} = this.props;

    exercises = [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque eligendi eos facere illum itaque labore maxime molestias nesciunt, obcaecati optio quis sed sequi, similique soluta tenetur ullam voluptatum! Numquam!',
        author: {
          first_name: 'Marcelo Ignacio',
          last_name: 'Jara Almeyda',
          banner: 'http://www.fotor.com/images2/features/blur/022.jpg'
        }
      },
      {
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
          <FieldBox field={field}/>

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
          <div className="head-link"><span className="glyphicon glyphicon-plus"/> Crear Nuevo Ejercicio</div>
          <UnitPageTitle filter={filter}/>

          <div className="row">
            {exercises.map((exercise, i) =>
              <div className="col-sm-12" key={i}>
                <div className="box box-fill">
                  <Link to="">
                    <div className="box-body box-body-min">
                      <summary>{exercise.text}</summary>
                    </div>

                    <div style={{position: "relative"}}>
                      <div className="backgrounded" style={{backgroundImage: `url("${exercise.author.banner}")`}}/>
                      <div className="box-footer box-footer-stylized">
                        <h3>
                          <small>Creado por:</small>
                          {exercise.author.first_name} {exercise.author.last_name}
                        </h3>
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
