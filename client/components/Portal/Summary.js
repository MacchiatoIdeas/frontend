import React from 'react';

import * as icons from '../../assets/flaticons';
import Header from '../Utilities/Header/index';

import style from './Portal.less';
import CourseBox from './Courses/CourseBox';
import {Link} from 'react-router-dom';
import TreniumModal from '../Utilities/TreniumModal/index';

import {Form} from '../Utilities/Form/style.less';
import SubjectSelect from '../Utilities/SubjectSelect/index';
import {connect} from 'react-redux';
import BodyLoading from '../Utilities/BodyLoading/index';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCourseModal: false,
    }
  }

  onSubjectSelect() {

  }

  render() {
    const {guides, courses, userType} = this.props;

    return (
      <div>
        {userType === 'student' ?
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
          </div>
          : null
        }

        <Header color="#5DDDD3" textColor="#fff" icon={icons.courses} sideButton={
          <Link to="#" onClick={() => this.setState({showCourseModal: true})}>
            <span className="glyphicon glyphicon-plus-sign"/>
          </Link>
        }>
          Mis Cursos
        </Header>

        <section className={style.section}>
          <div className="playlist playlist-accents">
            {courses.isLoading ?
              <BodyLoading padding={16}/> :
              courses.all.map((course, i) => <CourseBox key={i} course={course}/>)}
          </div>
        </section>

        {userType === 'teacher' ?
          <div>
            <Header color="#FFCA4F" textColor="#fff" icon={icons.guidesv2}>Mis Guías</Header>

            <section className={style.section}>
              <div className="playlist playlist-accents">
                {
                  guides.isLoading ?
                    <BodyLoading padding={16}/>
                    :
                    guides.all.map(guide =>
                      <div className="playlist-item" style={{borderRightColor: guide.subject.color}} key={guide.id}>
                        <a href="#" className="playlist-item-body playlist-item-link">
                          <span className="icon-play-v3 step" style={{background: guide.subject.color}}/>
                          <strong>{guide.title}</strong>
                          <div className="playlist-item-tag">{guide.subject.name}</div>
                        </a>
                      </div>)
                }
              </div>
            </section>
          </div>
          : null
        }

        <TreniumModal show={this.state.showCourseModal}
                      icon={icons.courses}
                      onHide={() => this.setState({showCourseModal: false})}
                      color="#5DDDD3"
                      title="Crear curso">

          <form className={Form}>
            <label>
              <div>Nombre del curso</div>
              <input type="text" placeholder="nombre de su curso"/>
            </label>

            <label style={{marginBottom: 0}}>
              <div>Materia</div>
            </label>

            <div style={{marginBottom: 16}}>
              <SubjectSelect subjects={[{
                'id': 1,
                'name': 'Matemáticas',
                'color': '#1A91A1',
                'thumbnail': 'http://static.macchiato.cl/images/mathematics.jpg'
              }, {
                'id': 2,
                'name': 'Lenguaje',
                'color': '#F1543F',
                'thumbnail': 'http://static.macchiato.cl/images/language.jpg'
              }]} onChange={this.onSubjectSelect}/>
            </div>

            <button>Continuar</button>
          </form>
        </TreniumModal>
      </div>
    )
  }
}
