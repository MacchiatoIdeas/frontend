import React from 'react';
import {Link, NavLink, Redirect, Route, Switch} from 'react-router-dom';

import * as icons from '../../../assets/flaticons';

import Guides from './Guides';
import Header from '../../Utilities/Header/index';

import style from './style.less';
import Students from './Students';

import {Form} from '../../Utilities/TreniumForm';
import AddStudentModal from './AddStudentModal';
import TreniumMenu, {active} from '../../Utilities/TreniumMenu';
import {connect} from 'react-redux';
import {getCourseByIdAction} from '../../../actions/courses';
import BodyLoading from '../../Utilities/BodyLoading';
import StudentModal from './StudentModal';
import showAlert from '../../Alert';
import {addStudentsToCourse} from '../../../requests/courses';

@connect(state => ({
  auth: state.auth,
  course: state.visibleCourse,
}), {
  getCourseByIdAction,
})
export default class Course extends React.Component {
  constructor(props) {
    super(props);

    this.onStudentClick = this.onStudentClick.bind(this);
    this.onModalSubmit = this.onModalSubmit.bind(this);
    this.onModalEmailsChange = this.onModalEmailsChange.bind(this);

    this.state = {
      showAddStudentModal: false,
      showStudentModal: false,
      visibleStudent: undefined,
      emails: '',
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getCourseByIdAction(id);
  }

  onStudentClick(student) {
    this.setState({
      showStudentModal: true,
      visibleStudent: student
    });
  }

  onModalEmailsChange(e) {
    this.setState({
      emails: e.target.value,
    })
  }

  onModalSubmit(e) {
    e.preventDefault();

    addStudentsToCourse(this.props.course.id, this.props.course.name, this.state.emails)
      .then(response => {
        showAlert('Estudiantes agregados con éxito.');
        this.props.getCourseByIdAction(this.props.course.id);
        this.setState({showAddStudentModal: false});
      });
  }

  render() {
    const {course, auth} = this.props;

    if (course.isLoading) {
      return <BodyLoading/>;
    }

    return (
      <div>
        <Header icon={icons.courses} color="#5DDDD3">{course.name}</Header>

        <section>
          <div className="row">
            <div className="col-sm-8">
              <TreniumMenu>
                <NavLink to={`/portal/course/${course.id}/guides`} activeClassName={active}>Guías</NavLink>
                <NavLink to={`/portal/course/${course.id}/students`} activeClassName={active}>Estudiantes</NavLink>
              </TreniumMenu>

              <Switch>
                <Redirect exact from={`/portal/course/${course.id}`} to={`/portal/course/${course.id}/guides`}/>
                <Route exact path="/portal/course/:id/guides" render={() =>
                  <Guides guides={course.guides}/>
                }/>
                <Route exact path="/portal/course/:id/students" render={() =>
                  <Students students={course.participants} onStudentClick={this.onStudentClick}/>
                }/>
              </Switch>
            </div>

            <div className="col-sm-4">
              <h3 className="page-header">
                {auth.data.user_type === 'teacher' ?
                  <div className={`pull-right ${style.sideButton}`}
                       onClick={() => this.setState({showAddStudentModal: true})}>
                    <span className="glyphicon glyphicon-plus"/>
                  </div>
                  : null}

                Lista de curso
              </h3>

              <Students students={course.participants} limit={10} onStudentClick={this.onStudentClick}/>

              <Link to={`/portal/course/${course.id}/students`} className={style.seeMore}>
                Ver todos...
              </Link>
            </div>
          </div>
        </section>

        <AddStudentModal show={this.state.showAddStudentModal}
                         onEmailsChange={this.onModalEmailsChange}
                         onSubmit={this.onModalSubmit}
                         initialParticipants={this.props.course.participants}
                         onHide={() => this.setState({showAddStudentModal: false})}/>

        <StudentModal show={this.state.showStudentModal}
                      onHide={() => this.setState({showStudentModal: false})}
                      student={this.state.visibleStudent}/>
      </div>
    )
  }
}
