import React from 'react';
import TreniumModal from '../../Utilities/TreniumModal/index';

import {Form} from '../../Utilities/Form/index';

import * as icons from '../../../assets/flaticons';
import Select from '../../Utilities/Select/index';
import BodyLoading from '../../Utilities/BodyLoading/index';
import {addDocumentToGuide, addExerciseToGuide, getAllOwnGuides} from '../../../requests/guides';
import ReactLoading from 'react-loading';

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
        this.setState({
          isLoading: false,
          guides: response.filter(guide => guide.subject.id === subjectId).map(guide => ({
            value: guide.id,
            name: guide.title,
            sideText: '',
          }))
        })
      });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.setState({isSending: true});

    if (this.props.documentId !== undefined) {
      addDocumentToGuide(this.state.selectedGuide, this.props.documentId, -1)
        .then(response => {
          this.props.onHide();
        });
    } else if (this.props.exerciseId) {
      addExerciseToGuide(this.state.selectedGuide, this.props.exerciseId, -1)
        .then(response => {
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
        <form onSubmit={this.onFormSubmit} className={Form}>
          <label>
            <div>Guía</div>
            {
              this.state.isLoading ?
                <BodyLoading padding={64}/> :
                <Select onChange={(value) => this.setState({selectedGuide: value})} options={this.state.guides}/>
            }
          </label>

          {this.state.isSending ?
            <div className="pull-right" style={{paddingTop: 26}}>
              <ReactLoading type="spin" color="#000" width={32}/>
            </div>
            : null
          }

          <button>Continuar</button>
        </form>
      </TreniumModal>
    )
  }
}
