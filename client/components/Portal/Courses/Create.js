import React from 'react';

import * as icons from '../../../assets/flaticons';
import Header from '../Header';

import {Form} from '../../Utilities/Form/style.less';

export default class Create extends React.Component {
  render() {
    return (
      <div>
        <Header icon={icons.courses} color="#5DDDD3">Crear nuevo curso</Header>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form className={Form}>
              <label>
                <div>Nombre del curso</div>
                <input type="text"/>
              </label>

              <label>
                <div>Materia</div>
                <select name="" id="">
                  <option value="">
                    Matemática
                  </option>

                  <option value="">
                    Lenguaje
                  </option>
                </select>
              </label>
            </form>
          </div>
        </div>
      </div>
    )
  }
}