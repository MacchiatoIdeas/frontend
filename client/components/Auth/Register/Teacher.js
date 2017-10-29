import React from 'react';
import SpecialButton from '../SpecialButton';

import style from './style.less';
import EqualFields from '../EqualFields';
import Textarea from 'react-textarea-autosize';
import * as icons from '../../../assets/flaticons';

import Dropzone from 'react-dropzone';

import {Form} from '../../Utilities/Form/style.less';

export default class Teacher extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onDrop = this.onDrop.bind(this);

    this.state = {
      files: [],
      email: '',
      password: '',
    }
  }

  onInputChange(fieldName, fieldValue, fieldValidity) {
    this.setState({
      [fieldName]: fieldValue,
    });
  }

  onDrop(files) {
    console.log(files);

    this.setState({
      files
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
          <div>Rut</div>
          <input type="text" ref="rut" placeholder="12345678-5" required/>
        </label>

        <label>
          <div>Institución</div>
          <input type="text" ref="institution" placeholder="Colegio, instituto, univerdad, etc..." required/>
        </label>

        <label>
          <div>Experiencia</div>
          <Textarea ref="experience" placeholder="Aquí escriba sobre su experiencia profesional..."/>
        </label>

        <label>
          <div>Curriculum</div>

          <Dropzone className={`${style.Dropzone} ${this.state.files.length > 0 ? style.DropzoneReady : ''}`} onDrop={this.onDrop} multiple={false}>
            <p>
              <div className="row">
                <div className="col-sm-2 text-center">
                  <img src={icons.file} height="50"/>
                </div>

                <div className="col-sm-10">
                  {
                    this.state.files.length === 0 ?
                      'Arrastre su curriculum aquí o presione para abrir una ventana de selección.'
                      :
                      this.state.files[0].name
                  }
                </div>
              </div>
            </p>
          </Dropzone>
        </label>

        <EqualFields name="password" text="Contraseña" placeholder="********" type="password" onChange={this.onInputChange}/>

        <SpecialButton text="Ya tengo una Cuenta" link="/login"/>

        <button>Continuar</button>
      </form>
    )
  }
}
