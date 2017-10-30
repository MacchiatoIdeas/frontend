import React from 'react';
import {Link, Redirect, Route, Switch} from 'react-router-dom';

import * as icons from '../../../../assets/flaticons';

import Guides from './Guides';
import Tests from './Tests';
import Header from '../../Header/index';
import Student from '../Student/index';
import Menu from '../Menu/index';

import style from './style.less';
import Students from './Students';
import {Modal, ModalBody, ModalHeader, ModalTitle} from 'react-bootstrap';
import Textarea from 'react-textarea-autosize';

import {Form} from '../../../Utilities/Form/style.less';
import AppuntaModal from '../../../Utilities/AppuntaModal/index';

export default class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addStudentModal: false,
    };
  }

  render() {
    const course = {
      id: 1,
      name: 'Primero Medio',
      subject: {
        id: 1,
        name: 'Lenguaje',
        color: '#cc1216',
      }
    };

    return (
      <div>
        <Header icon={icons.courses} color="#5DDDD3">{course.name}</Header>

        <section>
          <div className="row">
            <div className="col-sm-8">
              <Menu courseId={course.id}/>

              <Switch>
                <Route exact path="/portal/courses/:id/guides" component={Guides}/>
                <Route exact path="/portal/courses/:id/tests" component={Tests}/>
                <Route exact path="/portal/courses/:id/students" component={Students}/>
                <Redirect exact from={`/portal/courses/${course.id}`} to={`/portal/courses/${course.id}/guides`}/>
              </Switch>
            </div>

            <div className="col-sm-4">
              <h3 className="page-header">
                <div className="">
                  <div className={`pull-right ${style.sideButton}`}
                       onClick={() => this.setState({addStudentModal: true})}>
                    <span className="glyphicon glyphicon-plus"/>
                  </div>
                </div>

                Lista de curso
              </h3>

              <Student image="http://www.fotor.com/images2/features/blur/022.jpg" name="Hernán Herreros"/>
              <Student image="https://resizing.flixster.com/85MN4sgRBqXLc_MaaQLT150IISg=/50x50/v1.YzsyNzMwO2c7MTc0NjA7MTIwMDsxNTA7MTUw" name="Carolina Verdugo"/>
              <Student image="http://s3.crackedcdn.com/phpimages/members/avatars/2/4/467032_45_v13.png" name="Esteban Rodriguez"/>
              <Student image="http://1.gravatar.com/avatar/4baa7b0f8a930f6ff972922583e663e7?s=50&d=mm&r=g" name="Juan Carlos Martines"/>

              <Link to={`/portal/courses/${course.id}/students`} className={style.seeMore}>
                Ver todos...
              </Link>
            </div>
          </div>
        </section>

        <AppuntaModal icon={icons.student}
                      color="#FBB429"
                      show={this.state.addStudentModal}
                      title="Agregar estudiante al curso"
                      onHide={() => this.setState({addStudentModal: false})}>

          <form className={Form}>
            <label>
              <div>Correo(s) electrónico(s)</div>
              <Textarea placeholder="ejemplo1@ejemplo.com, ejemplo2@ejemplo.com"/>
            </label>

            <label>
              <div>Mensaje</div>
              <Textarea placeholder="mensaje para indicar a sus estudiantes por qué recibieron esta invitación..."/>
            </label>

            <button>Continuar</button>
          </form>
        </AppuntaModal>
      </div>
    )
  }
}
