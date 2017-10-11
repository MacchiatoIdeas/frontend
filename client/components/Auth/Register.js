import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../Navbar';

import style from './Register.less';
import Form from './Form';

const OptionButton = ({icon, text, onClick}) => (
  <div className={`col-sm-6 ${style.button}`}>
    <div className={`${style.buttonBody}`} onClick={onClick}>
      <div className={`${style.buttonIcon}`}>
        <i className={`glyphicon glyphicon-${icon}`}/>
      </div>

      {text}
    </div>
  </div>
);

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

  onOptionSelect(form) {
    this.setState({
      form
    });
  }

  getForm() {
    if (!this.state.form) {
      return null;
    } else if (this.state.form === 'student') {
      return (
        <Form title="Estudiante" onBackClick={() => {
          this.onOptionSelect(undefined);
        }}>
          <input type="text" className="form-control" placeholder="nombres" autoFocus required/>
          <input type="text" className="form-control" placeholder="apellidos" required/>

          <button className="btn btn-block btn-primary">Siguiente Paso</button>
        </Form>
      )
    } else if (this.state.form === 'teacher') {
      return (
        <Form title="Profesor" onBackClick={() => {
          this.onOptionSelect(undefined);
        }}>
          <input type="text" className="form-control" placeholder="nombres" autoFocus required/>
          <input type="text" className="form-control" placeholder="apellidos" required/>

          <button className="btn btn-block btn-primary">Siguiente Paso</button>
        </Form>
      )
    }
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
        <Navbar backgroundColor="rgba(255, 255, 255)"/>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              {this.state.form ? null : (
                <div className={`panel panel-default ${style.panel}`}>
                  <div className={`panel-body ${style.panelBody}`}>
                    <div className="row">
                      <div className="col-sm-12">
                        <h3 className={style.title}>Genial!, cómo quiere usar nuestra plataforma?</h3>
                      </div>

                      <div className="row">
                        <OptionButton text="Estudiante" icon="education" onClick={() => {
                          this.onOptionSelect('student');
                        }}/>

                        <OptionButton text="Profesor" icon="blackboard" onClick={() => {
                          this.onOptionSelect('teacher');
                        }}/>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {this.getForm()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
