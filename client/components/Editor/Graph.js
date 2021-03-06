import React from 'react';
import '../../style/editor.css';

import {Modal, ModalTitle, ModalHeader} from 'react-bootstrap';
import Geogebra from './Geogebra';

import * as icons from '../../assets/flaticons';
import style from './Graph.less';
import ClickOutHandler from 'react-onclickout';


export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      base64: this.props.editable !== undefined ? this.props.editable : '',
      PNGBase64: this.props.image !== undefined ? this.props.image : '',
      placeholder: this.props.image === undefined ?'background-placeholder' : '',
    };

    this.onClickFocus = this.onClickFocus.bind(this);
    this.closeModalGraph = this.closeModalGraph.bind(this);
    this.openModalGraph = this.openModalGraph.bind(this);
    this.onBlur = this.onBlur.bind(this);

  }

  onClickFocus() {
    console.log('Click!');
    this.setState({
      checked: true
    });
  }

  closeModalGraph(base64, PNGBase64) {
    if (base64 === null || PNGBase64 === null) {
      this.setState({
        showModal: false
      });
    } else {
      this.setState({
        showModal: false,
        base64: base64,
        PNGBase64: 'data:image/png;base64,' + PNGBase64,
        placeholder: ''
      });
      this.props.update('data:image/png;base64,' + PNGBase64, base64);
    }
  }

  openModalGraph() {
    this.setState({
      showModal: true
    })
  }

  onBlur() {
    console.log('Blur!');
    this.setState({
      checked: false,
    });
  }

  componentDidMount() {
    if (this.state.PNGBase64 === '')
      this.openModalGraph()
  }

  render() {
    return (
      <div>
        <ClickOutHandler onClickOut={this.onBlur}>
          <li onClick={this.onClickFocus}>
            <input className="pointer" type="radio" name="focus" checked={this.state.checked}/>
            <div className={'section graph ' + this.state.placeholder}>
              <div className="options">
                <span className="btn btn-link drag">
                  <span className="glyphicon glyphicon-th"/>
                </span>
                <button className="btn btn-link edit" onClick={this.openModalGraph}>
                  <span className="glyphicon glyphicon-pencil"/>
                </button>
                <button className="btn btn-link remove" onClick={() => this.props.remove(this.props.index)}>
                  <span className="glyphicon glyphicon-remove"/>
                </button>
              </div>
              <div className="graph-image">
                <img src={this.state.PNGBase64}/>
              </div>
            </div>

            {/* Modal that contains Geogebra */}
            <Modal bsSize="large" className={style.modal} show={this.state.showModal} onHide={(a, b) => this.closeModalGraph(null, null)}>
              <ModalHeader closeButton className={style.modalHeader}>
                <img src={icons.newGraph}/>
                <ModalTitle id="contained-modal-title">Editor de gráficos</ModalTitle>
              </ModalHeader>
              <Geogebra base64={this.state.base64}
                        closeModal={(base64, PNGBase64) => this.closeModalGraph(base64, PNGBase64)}/>
            </Modal>
          </li>
        </ClickOutHandler>
      </div>
    )
  }
}
