import React from 'react';
import {Modal, ModalBody, ModalHeader, ModalTitle} from 'react-bootstrap';
import style from '../../Site/SubjectBox.less';

class SubjectItem extends React.Component {
  render() {
    const {subject, onClick, selected = false} = this.props;

    return (
      <div onClick={() => onClick(subject)} style={{cursor: 'pointer'}}>
        <div id="image-subject-wrapper"
             className={`${style.subjectWrapper}`}
             style={{
               borderColor: subject.color,
               transform: selected ? 'scale(1.05, 1.05)' : '',
               transition: '0.25s',
               opacity: selected ? 1 : 0.6
             }}>

          <img src={subject.thumbnail} className="box-thumbnail" alt={subject.name}/>

          <div className={style.subjectNameWrapper} style={{
            backgroundColor: selected ? '#f1f1f1' : '#fff',
          }}>
            <span className={`${style.subjectNameAlt} lead`}>
              {subject.name}
            </span>
          </div>
        </div>
        <br/>
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

        <ModalBody>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Título de la Nueva Guía"/>
          </div>

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
