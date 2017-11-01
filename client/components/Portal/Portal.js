import React from 'react';

import {Redirect, Route, Switch} from 'react-router';
import {connect} from 'react-redux';

import Navbar from '../Navbar/Navbar';

import Body from '../Body';
import Summary from './Summary';
import Exercises from './Exercises';

import style from './Portal.less';
import {getOwnDataAction} from '../../actions/auth';
import Course from './Course/index';

@connect(state => ({
  auth: state.auth
}), {
  getOwnDataAction
})
export default class Portal extends React.Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.getOwnDataAction();
    }
  }

  render() {
    const {auth} = this.props;

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
                    {auth.data.user.first_name} {auth.data.user.last_name}
                    <span className="pull-right"/>
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
            <Route path="/portal/course/:id" component={Course}/>
            <Route path="/portal/exercises" component={Exercises}/>
            <Route component={Summary}/>
          </Switch>
          </Body>
        </div>
      </div>
    )
  }
}
