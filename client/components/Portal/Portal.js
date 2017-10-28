import React from 'react';

import {Redirect, Route, Switch} from 'react-router';
import {connect} from 'react-redux';

import Navbar from '../Navbar/Navbar';

import Body from '../Body';
import Summary from './Summary';
import Folders from './Folders';
import Courses from './Courses/Courses';
import Exercises from './Exercises';

import style from './Portal.less';
import Course from './Courses/Course';
import Guides from './Guides';

@connect(state => ({
  auth: state.auth
}))
export default class Portal extends React.Component {
  render() {
    const {auth} = this.props;

    console.log('[Portal]', auth);

    if (!auth.isAuthenticated) {
      return <Redirect to="/login"/>;
    }

    return (
      <div>
        <div className={style.headerContainer}>
          <div id="header" className={`appunta-bg ${style.header}`}>
            <Navbar transparent={true}/>

            <div className="container-fluid">
              <div className={`row ${style.summary}`}>
                <div className="col-sm-12">
                  <h1 className="page-header">
                    {auth.user.first_name} {auth.user.last_name}
                    <span className="pull-right">

                  </span>
                  </h1>

                  <div className="row">
                    <div className="col-sm-4">
                      <div className="box-alt">
                        <div className="box-jumbo">4</div>
                        <div className="box-body"><h3>Controles Pendientes</h3></div>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="box-alt">
                        <div className="box-jumbo">7</div>
                        <div className="box-body"><h3>Respuestas Nuevas</h3></div>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="box-alt">
                        <div className="box-jumbo">3</div>
                        <div className="box-body"><h3>Cursos</h3></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.innerShadow}/>
        </div>

        <div className={style.body}>
          <Body>
          <Switch>
            <Route path="/portal/folders" component={Folders}/>
            <Route path="/portal/courses" component={Courses}/>
            <Route path="/portal/exercises" component={Exercises}/>
            <Route path="/portal/guides" component={Guides}/>
            <Route path="/portal/course/:id" component={Course}/>
            <Route component={Summary}/>
          </Switch>
          </Body>
        </div>
      </div>
    )
  }
}
