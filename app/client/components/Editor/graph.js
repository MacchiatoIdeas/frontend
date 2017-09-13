import React from 'react';
import '../../style/editor.css';

import {Modal, ModalTitle, ModalHeader} from 'react-bootstrap';
import Geogebra from './geogebra';

import ClickOutHandler from 'react-onclickout';


export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      base64: this.props.base64 !== undefined ? this.props.base64 : '',
      PNGBase64: this.props.PNGbase64 !== undefined ? this.props.PNGbase64 : '',
      placeholder: 'background-placeholder'
    };

    this.onClickFocus = this.onClickFocus.bind(this);
    this.closeModalGraph = this.closeModalGraph.bind(this);
    this.openModalGraph = this.openModalGraph.bind(this);
    this.onBlur = this.onBlur.bind(this);

  }

  onClickFocus(event) {
    console.log('Click!');
    this.setState({
      checked: true
    });
  }

  closeModalGraph(base64, PNGBase64) {
    console.log('PNG', PNGBase64);
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

  onBlur(event) {
    console.log('Blur!');
    this.setState({
      checked: false,
    });
  }

  componentDidMount() {
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
                <span className="btn btn-link drag"><span className="glyphicon glyphicon-th"></span></span>
                <button className="btn btn-link edit" onClick={this.openModalGraph}><span
                  className="glyphicon glyphicon-pencil"></span></button>
                <button className="btn btn-link remove" onClick={() => this.props.remove(this.props.index)}><span
                  className="glyphicon glyphicon-remove"></span></button>
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
              <Geogebra base64={this.state.base64}
                        closeModal={(base64, PNGBase64) => this.closeModalGraph(base64, PNGBase64)}/>
            </Modal>
          </li>
        </ClickOutHandler>
      </div>
    )
  }
}
