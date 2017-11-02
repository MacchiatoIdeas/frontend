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
import {getAllOwnGuidesAction} from '../../actions/guides';
import {getAllRecommended} from '../../requests/exercises';
import {getAllSubjects} from '../../requests/subjects';

@connect(state => ({
  auth: state.auth,
}), {
  getAllOwnCoursesAction,
  getAllOwnGuidesAction
})
export default class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCourseModal: false,
      recommendations: []
    }
  }

  componentDidMount() {
    this.props.getAllOwnCoursesAction();

    if (this.props.auth.data.user_type === 'teacher') {
      this.props.getAllOwnGuidesAction();
    }

    if (this.props.auth.data.user_type === 'student') {
      getAllSubjects()
        .then(response => {
          response.map(subject => {
            getAllRecommended(subject.id)
              .then(response => {
                console.log(response);

                this.setState({
                  recommendations: [...this.state.recommendations, ...response]
                });
              })
          })
        });
    }
  }

  render() {
    const {guides, courses, data} = this.props.auth;

    return (
      <div>
        {data.user_type === 'student' ?
          <div>
            <Header color="#0E7886" icon={icons.notes} textColor="#fff">Mis Recomendaciones</Header>

            <div className="text-center" style={{margin: 32, fontSize: 18}}>
              No tiene recomendaciones actualmente, desarrolle ejercicios para crear su perfil!
            </div>
          </div>
          : null
        }

        <Header color="#5DDDD3" textColor="#fff" icon={icons.courses} sideButton={
          data.user_type === 'teacher' ?
            <Link to="#" onClick={() => this.setState({showCourseModal: true})}>
              <span className="glyphicon glyphicon-plus-sign"/>
            </Link> : null
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
