import React from 'react';
import {Redirect} from 'react-router';

import {connect} from 'react-redux';

import {sendLogin} from '../../../actions/auth';

import Navbar from '../../Navbar/Navbar';

import * as icons from '../../../assets/flaticons';
import AuthBox from '../AuthBox';
import SpecialButton from '../SpecialButton';

import {Form} from '../../Utilities/Form/style.less';

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
          <form onSubmit={this.handleSubmit.bind(this)} className={Form} style={{marginTop: 8}}>
            <label>
              <div>Nombre de Usuario</div>
              <input type="text" ref="username" placeholder="ejemplo@ejemplo.com" required/>
            </label>

            <label>
              <div>Contraseña</div>
              <input type="password" ref="password" placeholder="*****" required/>
            </label>

            <SpecialButton text="Crear una cuenta" link="/register"/>

            <button>Continuar</button>
          </form>
        </AuthBox>
      </div>
    )
  }
}
