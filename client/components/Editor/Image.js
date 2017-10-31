import React from 'react';

import ClickOutHandler from 'react-onclickout';
import {Modal, ModalTitle, ModalHeader, ModalBody} from 'react-bootstrap';

import style from './Image.less'
import * as icons from '../../assets/flaticons';
import Gallery from "./Gallery";

export default class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      placeholder: true,
      showModal: false,
      imageUrl: this.props.url !== undefined ? this.props.url : '',
    };

    this.onClickFocus = this.onClickFocus.bind(this);
    this.closeModalGallery = this.closeModalGallery.bind(this);
    this.openModalGallery = this.openModalGallery.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onClickFocus() {
    this.setState({
      checked: true
    });
  }

  closeModalGallery(url) {
    if (url === null) {
      this.setState({
        showModal: false
      });
    } else {
      this.setState({
        showModal: false,
        imageUrl: url,
        placeholder: false,
      });
      this.props.update(url);
    }
  }

  openModalGallery() {
    this.setState({
      showModal: true
    })
  }

  onBlur() {
    this.setState({
      checked: false,
    });
  }

  componentDidMount() {
    if (this.state.imageUrl === '') {
      this.openModalGallery();
    } else {
      this.setState({
        placeholder: false,
      })
    }
  }

  render() {
    let placeholder = this.state.placeholder ? style.placeholder : '';
    return (
      <div>
        <ClickOutHandler onClickOut={this.onBlur}>
          <li onClick={this.onClickFocus}>
            <input className="pointer" type="radio" name="focus" checked={this.state.checked}/>
            <div className={`section image ${placeholder}`}>
              <div className="options">
                <span className="btn btn-link drag">
                  <span className="glyphicon glyphicon-th"/>
                </span>
                <button className="btn btn-link edit" onClick={this.openModalGallery}>
                  <span className="glyphicon glyphicon-pencil"/>
                </button>
                <button className="btn btn-link remove" onClick={() => this.props.remove(this.props.index)}>
                  <span className="glyphicon glyphicon-remove"/>
                </button>
              </div>
              <div className={style.image}>
                <div>
                  <img src={this.state.imageUrl}/>
                </div>
              </div>
            </div>

            {/* Modal that contains the Gallery */}
            <Modal bsSize="large" className={style.modal} show={this.state.showModal}
                   onHide={(a, b) => this.closeModalGallery(null, null)}>
              <ModalHeader closeButton className={style.modalHeader}>
                <img src={icons.newImage}/>
                <ModalTitle id="contained-modal-title">Mi Galería de Imágenes</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <Gallery closeModal={(url) => this.closeModalGallery(url)}/>
              </ModalBody>
            </Modal>
          </li>
        </ClickOutHandler>
      </div>
    )
  }
}
