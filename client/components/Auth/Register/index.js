import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../../Navbar/Navbar';

import * as icons from '../../../assets/flaticons';
import AuthBox from '../AuthBox';
import {Route, Switch} from 'react-router-dom';
import Select from './Select';
import Student from "./Student";
import Teacher from "./Teacher";

@connect((state) => {
  return {
    auth: state.auth,
  }
}, {})
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {auth} = this.props;

    if (auth.isAuthenticated) {
      return (
        <Redirect to="/portal"/>
      )
    }

    return (
      <div>
        <Navbar backgroundColor="rgba(255, 255, 255)"/>

        <AuthBox icon={icons.register} color="#1A91A1" title="Crear Cuenta">
          <Switch>
            <Route exact path="/register" component={Select}/>
            <Route exact path="/register/student" component={Student}/>
            <Route exact path="/register/teacher" component={Teacher}/>
          </Switch>
        </AuthBox>
      </div>
    )
  }
}
