import React from 'react';
import TreniumForm from '../../../Utilities/TreniumForm';
import TreniumModal from '../../../Utilities/TreniumModal';
import * as icons from '../../../../assets/flaticons';
import Textarea from 'react-textarea-autosize';

export default class AddStudentModal extends React.Component {
  render() {
    const {show, onHide, onSubmit, onEmailsChange, initialParticipants} = this.props;

    let emails = initialParticipants.map(student => student.user.email);

    return (
      <TreniumModal icon={icons.student}
                    color="#FBB429"
                    show={show}
                    title="Agregar estudiante al curso"
                    onHide={onHide}>
        <TreniumForm onSubmit={onSubmit}>
          <label>
            <div>Correo(s) electrónico(s)</div>
            <input defaultValue={emails.join(', ')} onChange={onEmailsChange} placeholder="ejemplo1@ejemplo.com, ejemplo2@ejemplo.com"/>
          </label>
          <button>Continuar</button>
        </TreniumForm>
      </TreniumModal>
    )
  }
}
