import React from 'react';

import {Redirect, Route, Switch} from 'react-router';
import {connect} from 'react-redux';

import Navbar from '../Navbar/Navbar';

import Body from '../Body';
import Summary from './Summary';

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

            <div className="container-fluid clearfix">
              <div className="col-sm-4">
                <div className={style.avatar}>
                  <img src="https://placeimg.com/1000/1000/any" alt=""/>
                </div>
              </div>
              <div className="col-sm-8">
                <div className={style.info}>
                  <h1>{auth.data.user.first_name} {auth.data.user.last_name}</h1>

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
            <Route component={Summary}/>
          </Switch>
          </Body>
        </div>
      </div>
    )
  }
}
