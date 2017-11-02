import React from 'react';
import TreniumModal from '../../Utilities/TreniumModal/index';

import * as icons from '../../../assets/flaticons';
import Select from '../../Utilities/Select/index';
import BodyLoading from '../../Utilities/BodyLoading/index';
import {addDocumentToGuide, addExerciseToGuide, getAllOwnGuides} from '../../../requests/guides';
import TreniumFormLoading from '../../Utilities/TreniumForm/TreniumFormLoading';
import TreniumForm from '../../Utilities/TreniumForm/index';
import showAlert from '../../Alert';

export default class AddToGuideModal extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      isLoading: true,
      isSending: false,
      selectedGuide: 0,
      guides: [],
    }
  }

  componentWillReceiveProps() {
    const {subjectId} = this.props;

    this.setState({
      isLoading: true,
      isSending: false,
    });

    getAllOwnGuides()
      .then(response => {
        let firstId = 0;

        if (response.length > 0) {
          firstId = response[0].id;
        }

        this.setState({
          isLoading: false,
          guides: response.filter(guide => guide.subject.id === subjectId).map(guide => ({
            value: guide.id,
            name: guide.title,
            sideText: '',
          })),
          selectedGuide: firstId,
        })
      });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.setState({isSending: true});

    if (this.props.documentId !== undefined) {
      addDocumentToGuide(this.state.selectedGuide, this.props.documentId, -1)
        .then(response => {
          showAlert('¡Documento añadido con éxito!');
          this.props.onHide();
        });
    } else if (this.props.exerciseId) {
      addExerciseToGuide(this.state.selectedGuide, this.props.exerciseId, -1)
        .then(response => {
          showAlert('¡Ejercicio añadido con éxito!');
          this.props.onHide();
        });
    }
  }

  render() {
    const {show, onHide, documentId} = this.props;

    return (
      <TreniumModal show={show}
                    onHide={onHide}
                    title={`Agregar ${documentId !== undefined ? 'documento' : 'ejercicio'} a guía`}
                    icon={icons.guidesv2}
                    color="#FFCA4F">
        <TreniumForm onSubmit={this.onFormSubmit}>
          <label>
            <div>Guía</div>
            {
              this.state.isLoading ?
                <BodyLoading padding={64}/> :
                <Select onChange={(value) => this.setState({selectedGuide: value})} options={this.state.guides}/>
            }
          </label>

          <TreniumFormLoading isSending={this.state.isSending}/>

          <button>Continuar</button>
        </TreniumForm>
      </TreniumModal>
    )
  }
}
