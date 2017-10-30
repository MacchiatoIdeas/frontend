import React from 'react';
import SpecialButton from '../SpecialButton';

import style from './style.less';
import EqualFields from '../EqualFields';

import {Form} from '../../Utilities/Form/style.less';

export default class Student extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      email: '',
      password: '',
    }
  }

  onInputChange(fieldName, fieldValue, fieldValidity) {
    this.setState({
      [fieldName]: fieldValue,
    });
  }

  render() {
    return (
      <form className={`${style.Form} ${Form}`}>
        <label>
          <div>Nombres</div>
          <input type="text" ref="firstName" placeholder="Juan Pablo" required/>
        </label>

        <label>
          <div>Apellidos</div>
          <input type="text" ref="lastName" placeholder="Perez Gonzales" required/>
        </label>

        <label>
          <div>Nombre de Usuario</div>
          <input type="text" ref="username" placeholder="jperez" required/>
        </label>

        <EqualFields name="email" text="Correo electrónico" placeholder="ejemplo@ejemplo.com" onChange={this.onInputChange}/>

        <label>
          <div>Fecha de Nacimiento</div>
          <input type="date" ref="birthDate" required/>
        </label>

        <label>
          <div>Institución</div>
          <input type="text" ref="institution" placeholder="Colegio, instituto, universidad, etc..." required/>
        </label>

        <EqualFields name="password" text="Contraseña" placeholder="********" type="password" onChange={this.onInputChange}/>

        <SpecialButton text="Ya tengo una Cuenta" link="/login"/>

        <button>Continuar</button>
      </form>
    )
  }
}
