import React from 'react';
import Header from '../../../Utilities/Header/index';

import * as icons from '../../../../assets/flaticons';
import HeaderSideButton from '../../../Utilities/Header/HeaderSideButton';
import Editor from '../../../Editor/Editor';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateDocumentAction} from '../../../../actions/documents';
import showAlert from '../../../Alert';
import ReactLoading from 'react-loading';

@connect(undefined, {
  updateDocumentAction
})
export default class DocumentEdit extends React.Component {
  constructor(props) {
    super(props);

    this.onEditorChange = this.onEditorChange.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);

    this.state = {
      editorData: null
    };
  }

  onSaveClick() {
    const documentId = this.props.document.id;
    const title = this.props.document.title;
    const summary = this.props.document.summary;
    const text = JSON.stringify(this.state.editorData);

    this.props.updateDocumentAction(documentId, title, summary, text)
      .then(response => {
        showAlert('Documento actualizado con éxito.');
      });
  }

  onEditorChange(text) {
    this.setState({
      editorData: text
    });
  }

  render() {
    const {document, auth} = this.props;

    if (!(auth.isAuthenticated && auth.data.user.id === document.author.id)) {
      return <Redirect to="/"/>;
    }

    return (
      <div>
        <Header icon={icons.document} color="#FF757C" sideButton={
          document.isUpdating ?
            <ReactLoading type="spin" delay={0} width={36} height={36}/>
            :
            <HeaderSideButton onClick={this.onSaveClick} icon="floppy-disk"/>
        }>{document.title}</Header>

        <Editor json={JSON.parse(document.text)} update={this.onEditorChange}/>
      </div>
    )
  }
}
