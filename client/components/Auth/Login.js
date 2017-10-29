import React from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import {sendLogin} from '../../actions/auth';

import Navbar from '../Navbar/Navbar';

import * as icons from '../../assets/flaticons';
import AuthBox from './AuthBox';
import SpecialButton from './SpecialButton';

@connect((state) => ({
  auth: state.auth,
}), {
  sendLogin
})
export default class Login extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    const username = this.refs.username.value;
    const password = this.refs.password.value;

    this.props.sendLogin(username, password);
  }

  render() {
    const {auth} = this.props;

    console.log('[Login]', auth);

    if (auth.isAuthenticated) {
      return <Redirect to="/portal"/>;
    }

    return (
      <div>
        <Navbar backgroundColor="rgba(255, 255, 255)"/>

        <AuthBox icon={icons.login} title="Iniciar Sesión" color="#FFCA4F">
          <label>
            <div>Nombre de Usuario</div>
            <input type="text" placeholder="ejemplo@ejemplo.com"/>
          </label>

          <label>
            <div>Contraseña</div>
            <input type="password" placeholder="*****"/>
          </label>

          <SpecialButton text="Crear una cuenta" link="/register"/>

          <button>Continuar</button>
        </AuthBox>
      </div>
    )
  }
}

/*
<div className={`panel panel-default ${style.panel}`}>
              <div className={`panel-body ${style.panelBody}`}>
                <h2 className={style.title}>Iniciar Sesión</h2>

                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group form-group-lg">
                    <input ref="username" type="text" className="form-control" placeholder="nombre de usuario"/>
                  </div>

                  <div className="form-group form-group-lg">
                    <input ref="password" type="password" className="form-control" placeholder="contraseña"/>
                  </div>

                  <div className="form-group">
                    <button className={`btn btn-primary btn-lg btn-block ${style.loginButton}`}>Ingresar</button>
                  </div>
                </form>
              </div>
            </div>
 */