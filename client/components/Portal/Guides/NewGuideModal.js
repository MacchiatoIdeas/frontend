import React from 'react';
import {Modal, ModalBody, ModalHeader, ModalTitle} from 'react-bootstrap';
import subjectBoxStyle from '../../Site/SubjectBox.less';
import style from './style.less';

class SubjectItem extends React.Component {
  render() {
    const {subject, onClick, selected = false} = this.props;

    return (
      <div onClick={() => onClick(subject)} style={{cursor: 'pointer', marginBottom: 4, marginTop: 4}}>
        <div id="image-subject-wrapper"
             className={`${subjectBoxStyle.subjectWrapper}`}
             style={{
               borderColor: subject.color,
               transform: selected ? 'scale(1.025, 1.025)' : '',
               transition: '0.25s',
               opacity: selected ? 1 : 0.6
             }}>

          <img src={subject.thumbnail} className="box-thumbnail" alt={subject.name}/>

          <div className={subjectBoxStyle.subjectNameWrapper} style={{
            backgroundColor: selected ? '#f1f1f1' : '#fff',
          }}>
            <span className={`${subjectBoxStyle.subjectNameAlt} lead`}>
              {subject.name}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default class NewGuideModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {},
    };
  }

  onClick(subject) {
    this.setState({
      selected: subject,
    })
  }

  onCloseEvent() {
    this.state = {
      selected: {},
    };

    this.props.hideModalEvent();
  }

  render() {
    const {subjects, showModal} = this.props;
    const {selected} = this.state;

    return (
      <Modal bsSize="large" show={showModal} onHide={this.onCloseEvent.bind(this)}>
        <ModalHeader closeButton>
          <ModalTitle id="contained-modal-title">Crear Nueva Guía</ModalTitle>
        </ModalHeader>

        <input type="text" className={`form-control ${style.formTitle}`}
               placeholder="Título de la nueva guía..."
               autoFocus/>

        <input type="text" className={`form-control ${style.formBrief}`}
               placeholder="Descripción corta..."/>

        <ModalBody>
          <div className="row">
            {subjects.map((subject, i) =>
              <div className="col-sm-4" key={i}>
                <SubjectItem subject={subject}
                             onClick={this.onClick.bind(this)}
                             selected={selected.id === subject.id}/>
              </div>
            )}
          </div>
        </ModalBody>
      </Modal>
    )
  }
}
