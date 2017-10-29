import React from 'react';

import * as icons from '../../assets/flaticons';
import Header from './Header/index';

import style from './Portal.less';
import CourseBox from './Courses/CourseBox';

export default class Summary extends React.Component {
  render() {
    const courses = [
      {
        id: 1,
        name: '1ro Medio - Champagnat',
        subject: {
          id: 1,
          name: 'Lenguaje',
          color: '#cc1216',
        }
      },
      {
        id: 2,
        name: '2do Medio - Alicante',
        subject: {
          id: 1,
          name: 'Matemáticas',
          color: '#006699',
        }
      }
    ];

    return (
      <div>
        <Header color="#0E7886" icon={icons.notes} textColor="#fff">Mis Recomendaciones</Header>

        <section className={style.section}>
          <div className="playlist playlist-accents">
            <div className="playlist-item" style={{borderRightColor: '#6699dd'}}>
              <a href="#" className="playlist-item-body playlist-item-link">
                <span className="icon-play-v3 step" style={{background: '#6699dd'}}/>
                <strong>Ecuaciones Diferenciales Ordinarias</strong>
                <div className="playlist-item-tag">Matemáticas</div>
              </a>
            </div>

            <div className="playlist-item" style={{borderRightColor: '#d9534f'}}>
              <div className="playlist-item-body">
                <span className="icon-play-v3 step" style={{background: '#d9534f'}}/>
                <strong>Conectores</strong>
                <div className="playlist-item-tag">Lenguaje</div>
              </div>
            </div>
          </div>
        </section>

        <Header color="#efa467" textColor="#fff" icon={icons.guides}>Mis Guías</Header>

        <section className={style.section}>
          <div className="playlist playlist-progress">
            <div className="playlist-item">
              <div className="playlist-item-body">
                <span className="icon-play-v3 step" style={{background: '#5cb85c'}}/>
                <strong>Guía de Ejercicios de Matemáticas</strong>
              </div>

              <div className="progress" style={{margin: 0}}>
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90"
                     aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>
                </div>
              </div>
            </div>

            <div className="playlist-item">
              <div className="playlist-item-body">
                <span className="icon-play-v3 step" style={{background: '#d9534f'}}/>
                <strong>Guía de Ejercicios de Historia</strong>
              </div>

              <div className="progress" style={{margin: 0}}>
                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20"
                     aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
                </div>
              </div>
            </div>

            <div className="playlist-item">
              <div className="playlist-item-body">
                <span className="icon-play-v3 step" style={{background: '#f0ad4e'}}/>
                <strong>Guía de Ejercicios de Lenguaje</strong>
              </div>

              <div className="progress" style={{margin: 0}}>
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                     aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Header color="#5DDDD3" textColor="#fff" icon={icons.courses} sideButton="/portal/courses/create">
          Mis Cursos
        </Header>

        <section className={style.section}>
          <div className="playlist playlist-accents">
            {courses.map((course, i) =>
              <CourseBox key={i} course={course}/>
            )}
          </div>
        </section>
      </div>
    )
  }
}
