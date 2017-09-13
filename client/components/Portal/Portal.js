import React from 'react';

import {Redirect, Route, Switch} from 'react-router';
import {connect} from "react-redux";

import {getUserData} from "../../actions/auth";

import Navbar from '../Navbar';
import Summary from './Summary';
import Folders from "./Folders";
import Courses from "./Courses";
import Exercises from "./Exercises";

import style from './Portal.less';

@connect(state => {
  const {auth} = state;
  if (auth.user === undefined) {
    return {
      isFetching: true,
      auth,
    }
  }

  return {
    isFetching: false,
    auth
  }
}, {
  getUserData
})
export default class Portal extends React.Component {
  componentDidMount() {
    this.props.getUserData(this.props.auth.access_token);
  }

  render() {
    const {auth} = this.props;

    if (!auth.access_token) {
      return (
        <Redirect to="/login"/>
      )
    }

    if (this.props.isFetching) {
      return null;
    }

    return (
      <div>
        <div id="header" className="appunta-bg">
          <Navbar backgroundColor="rgba(255, 255, 255, 0.35)"/>

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

        <div className="container" style={{marginTop: "32px"}}>
          <Switch>
            <Route path="/portal/folders" component={Folders}/>
            <Route path="/portal/courses" component={Courses}/>
            <Route path="/portal/exercises" component={Exercises}/>
            <Route component={Summary}/>
          </Switch>
        </div>
      </div>
    )
  }
}
