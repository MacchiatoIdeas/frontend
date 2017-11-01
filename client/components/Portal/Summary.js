import React from 'react';

import * as icons from '../../assets/flaticons';
import Header from '../Utilities/Header/index';

import style from './Portal.less';
import CourseBox from './Course/CourseBox';
import {Link} from 'react-router-dom';

import BodyLoading from '../Utilities/BodyLoading';
import CreateCourseModal from './CreateCourseModal';
import {connect} from 'react-redux';
import {getAllOwnCoursesAction} from '../../actions/courses';

@connect(state => ({
  auth: state.auth,
}), {
  getAllOwnCoursesAction
})
export default class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCourseModal: false,
    }
  }

  componentDidMount() {
    this.props.getAllOwnCoursesAction();
  }

  render() {
    const {guides, courses, data} = this.props.auth;

    return (
      <div>
        {data.user_type === 'student' ?
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

        {data.user_type === 'teacher' ?
          <div>
            <Header color="#FFCA4F" textColor="#fff" icon={icons.guidesv2}>Mis Guías</Header>

            <section className={style.section}>
              <div className="playlist playlist-accents">
                {guides.isLoading ?
                  <BodyLoading padding={16}/>
                  :
                  guides.all.map(guide =>
                    <div className="playlist-item" style={{borderRightColor: guide.subject.color}} key={guide.id}>
                      <Link to={`/site/guides/${guide.id}`} className="playlist-item-body playlist-item-link">
                        <span className="icon-play-v3 step" style={{background: guide.subject.color}}/>
                        <strong>{guide.title}</strong>
                        <div className="playlist-item-tag">{guide.subject.name}</div>
                      </Link>
                    </div>)
                }
              </div>
            </section>
          </div>
          : null
        }

        <CreateCourseModal show={this.state.showCourseModal}
                           onHide={() => this.setState({showCourseModal: false})}
                           history={this.props.history}/>
      </div>
    )
  }
}
