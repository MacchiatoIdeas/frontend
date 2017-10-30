import React from 'react';

import * as icons from '../../../assets/flaticons';
import Header from '../Header';

import {Form} from '../../Utilities/Form/style.less';
import SubjectSelect from '../../Utilities/SubjectSelect';

export default class Create extends React.Component {
  onSubjectSelect() {

  }

  render() {
    return (
      <div>
        <Header icon={icons.courses} color="#5DDDD3">Crear un curso</Header>

        <section>
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <form className={Form}>
                <label>
                  <div>Nombre del curso</div>
                  <input type="text" placeholder="nombre de su curso"/>
                </label>

                <label style={{marginBottom: 0}}>
                  <div>Materia</div>
                </label>

                <div style={{marginBottom: 16}}>
                  <SubjectSelect subjects={[{
                    'id': 1,
                    'name': 'Matemáticas',
                    'color': '#1A91A1',
                    'thumbnail': 'http://static.macchiato.cl/images/mathematics.jpg'
                  }, {
                    'id': 2,
                    'name': 'Lenguaje',
                    'color': '#F1543F',
                    'thumbnail': 'http://static.macchiato.cl/images/language.jpg'
                  }]} onChange={this.onSubjectSelect}/>
                </div>

                <button>Continuar</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}