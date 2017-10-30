import React from 'react';
import {Modal, ModalBody, ModalHeader, ModalTitle} from 'react-bootstrap';

import style from './style.less';

export default class AppuntaModal extends React.Component {
  render() {
    const {title, show, onHide, icon, color, children} = this.props;

    return (
      <Modal show={show} onHide={onHide} containerClassName={style.AppuntaModal}>
        <ModalHeader closeButton className={style.AppuntaModalHeader} style={{backgroundColor: color}}>
          <img src={icon} alt=""/>
          <ModalTitle>
            {title}
          </ModalTitle>
        </ModalHeader>

        <ModalBody>
          {children}
        </ModalBody>
      </Modal>
    )
  }
}