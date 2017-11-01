import React from 'react';
import TreniumModal, {icons} from '../../../Utilities/TreniumModal';
import TreniumForm from '../../../Utilities/TreniumForm';

import Textarea from 'react-textarea-autosize';
import {createDocument} from '../../../../requests/documents';
import TreniumFormLoading from '../../../Utilities/TreniumForm/TreniumFormLoading';

export default class CreateDocumentModal extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      isSending: false,
      summary: '',
    };
  }

  componentWillReceiveProps() {
    this.setState({
      isSending: false,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.setState({
      isSending: true,
    });

    const title = this.refs.title.value;
    const summary = this.state.summary;
    const unitId = this.props.unitId;

    createDocument(unitId, title, summary)
      .then(response => {
        this.props.history.push(`/site/contents/${response.id}`);
      });
  }

  render() {
    const {show, onHide} = this.props;

    return (
      <TreniumModal show={show}
                    onHide={onHide}
                    title="Crear documento"
                    icon={icons.document}
                    color="#FF757C">
        <TreniumForm onSubmit={this.onFormSubmit}>
          <label>
            <div>Título</div>
            <input type="text" ref="title" placeholder="Título del documento" required/>
          </label>

          <label>
            <div>Descripción</div>
            <Textarea type="text"
                      onChange={(e) => this.setState({summary: e.target.value})}
                      placeholder="De qué tratará su documento" required/>
          </label>

          <TreniumFormLoading isSending={this.state.isSending}/>

          <button>Continuar</button>
        </TreniumForm>
      </TreniumModal>
    )
  }
}
