import React from 'react';
import SpecialButton from '../SpecialButton';

import style from './style.less';
import EqualFields from '../EqualFields';
import Textarea from 'react-textarea-autosize';
import * as icons from '../../../assets/flaticons';

import Dropzone from 'react-dropzone';

import {Form} from '../../Utilities/TreniumForm/style.less';
import {registerTeacher} from '../../../requests/auth';
import showAlert from "../../Alert";

export default class Teacher extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onAvatarDrop = this.onAvatarDrop.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      avatar: [],
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

  onAvatarDrop(avatar) {
    this.setState({avatar});
  }

  onDrop(files) {
    this.setState({files});
  }

  onSubmit(e) {
    e.preventDefault();

    const firstName = this.refs.firstName.value;
    const lastName = this.refs.lastName.value;
    const email = this.state.email;
    const birthDate = this.refs.birthDate.value;
    const institution = this.refs.institution.value;
    const password = this.state.password;
    const profilePicture = this.state.avatar[0];
    const curriculum = this.state.files[0];
    const rut = this.refs.rut.value;
    const bio = this.refs.experience.value;

    registerTeacher(firstName, lastName, email, birthDate, institution, password,
                    profilePicture, curriculum, rut, bio)
      .then(response => {
        showAlert('Solicitud enviada con éxito, redirigiendo...', () => {
          this.props.history.push('/');
        });
      })
  }

  render() {
    return (
      <form className={`${style.Form} ${Form}`} onSubmit={this.onSubmit}>
        <label>
          <div>Nombres</div>
          <input type="text" ref="firstName" placeholder="Juan Pablo" required/>
        </label>

        <label>
          <div>Apellidos</div>
          <input type="text" ref="lastName" placeholder="Perez Gonzales" required/>
        </label>

        <EqualFields name="email" text="Correo electrónico" placeholder="ejemplo@ejemplo.com"
                     onChange={this.onInputChange}/>

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
          <input type="text" ref="institution" placeholder="Colegio, instituto, universidad, etc..." required/>
        </label>

        <label>
          <div>Experiencia</div>
          <input type="text" ref="experience" placeholder="Aquí escriba sobre su experiencia profesional..."/>
        </label>

        <label htmlFor="dropzone" style={{marginBottom: 0}}>
          <div>Curriculum</div>
        </label>

        <Dropzone className={`${style.Dropzone} ${this.state.files.length > 0 ? style.DropzoneReady : ''}`}
                  onDrop={this.onDrop} multiple={false}>
          <p>
            <div className="row">
              <div className="col-sm-2 text-center">
                <img src={icons.file} height="50"/>
              </div>

              <div className="col-sm-10">
                {this.state.files.length === 0 ?
                  'Arrastre su curriculum aquí o presione para abrir una ventana de selección.'
                  :
                  this.state.files[0].name
                }
              </div>
            </div>
          </p>
        </Dropzone>

        <label htmlFor="dropzone" style={{marginBottom: 0}}>
          <div>Foto de Perfil</div>
        </label>

        <Dropzone className={`${style.Dropzone} ${this.state.avatar.length > 0 ? style.DropzoneReady : ''}`}
                  onDrop={this.onAvatarDrop} multiple={false}>
          <p>
            <div className="row">
              <div className="col-sm-2 text-center">
                <img src={icons.teacher} height="50"/>
              </div>

              <div className="col-sm-10">
                {this.state.avatar.length === 0 ?
                  'Arrastre una fotografía aquí o presione para abrir una ventana de selección.'
                  :
                  this.state.avatar[0].name
                }
              </div>
            </div>
          </p>
        </Dropzone>

        <EqualFields name="password" text="Contraseña" placeholder="********" type="password"
                     onChange={this.onInputChange}/>

        <SpecialButton text="Ya tengo una Cuenta" link="/login"/>

        <button>Continuar</button>
      </form>
    )
  }
}
