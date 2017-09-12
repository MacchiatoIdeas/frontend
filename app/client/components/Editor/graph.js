import React from 'react';
import '../../style/editor.css';

import {Modal, ModalTitle, ModalHeader} from 'react-bootstrap';
import Geogebra from './geogebra';


export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      base64: '',
      PNGBase64: '',
      placeholder: 'background-placeholder'
    };

    this.onClickFocus = this.onClickFocus.bind(this);
    this.closeModalGraph = this.closeModalGraph.bind(this);

  }

  onClickFocus(event) {
    console.log('Click!');
    this.setState({
      checked: true
    });
  }

  closeModalGraph(base64, PNGBase64) {
    console.log("PNG", PNGBase64);
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
    }
  }

  openModalGraph() {
    this.setState({
      showModal: true
    })
  }

  componentDidMount() {
    this.openModalGraph()
  }

  render() {
    return (
      <div>
        <li onClick={this.onClickFocus}>
          <input className="pointer" type="radio" name="focus" checked={this.state.checked}/>
          <div className={'section graph ' + this.state.placeholder}>
            <div className="options">
              <span className="btn btn-link drag"><span className="glyphicon glyphicon-th"></span></span>
              <button className="btn btn-link edit"><span className="glyphicon glyphicon-pencil"></span></button>
              <button className="btn btn-link remove"><span className="glyphicon glyphicon-remove"></span></button>
            </div>
            <div className="graph-image">
              <img src={this.state.PNGBase64}/>
            </div>
          </div>

          {/* Modal that contains Geogebra */}
          <Modal bsSize="large" show={this.state.showModal} onHide={(a, b) => this.closeModalGraph(null, null)}>
            <ModalHeader closeButton>
              <ModalTitle id="contained-modal-title">Editor de gráficos</ModalTitle>
            </ModalHeader>
            <Geogebra closeModal={(base64, PNGBase64) => this.closeModalGraph(base64, PNGBase64)}/>
          </Modal>
        </li>
      </div>
    )
  }
}
