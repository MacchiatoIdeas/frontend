import React from 'react';
import TreniumForm from '../../../Utilities/TreniumForm';
import TreniumModal from '../../../Utilities/TreniumModal';
import * as icons from '../../../../assets/flaticons';
import Textarea from 'react-textarea-autosize';

export default class AddStudentModal extends React.Component {
  render() {
    const {show, onHide} = this.props;

    return (
      <TreniumModal icon={icons.student}
                    color="#FBB429"
                    show={show}
                    title="Agregar estudiante al curso"
                    onHide={onHide}>

        <TreniumForm action="test">
          <label>
            <div>Correo(s) electrónico(s)</div>
            <Textarea placeholder="ejemplo1@ejemplo.com, ejemplo2@ejemplo.com"/>
          </label>

          <label>
            <div>Mensaje</div>
            <Textarea placeholder="mensaje para indicar a sus estudiantes por qué recibieron esta invitación..."/>
          </label>

          <button>Continuar</button>
        </TreniumForm>
      </TreniumModal>
    )
  }
}
