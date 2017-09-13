import React from "react";
import {Redirect} from "react-router";

import {connect} from "react-redux";

import {sendLogin} from "../../actions/auth";

import Navbar from "../Navbar";

import style from './Login.less';

@connect((state) => {
  return {
    auth: state.auth,
  }
}, {
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

    if (auth.access_token) {
      return (
        <Redirect to="/portal"/>
      )
    }

    return (
      <div>
        <Navbar backgroundColor="rgba(255, 255, 255)" />

        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
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
                      <button className="btn btn-primary btn-lg btn-block">¡ Ingresar !</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
