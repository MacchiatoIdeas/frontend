import React from 'react';
import Navbar from '../Navbar';
import '../../style/editor.css';


export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};

    this.onClickFocus = this.onClickFocus.bind(this);
  }

  onClickFocus(event) {
    console.log('Click!');
    this.setState({
      checked: true
    });
  }

  render() {
    return (
      <div>
        <li onClick={this.onClickFocus}>
          <input className="pointer" type="radio" name="focus" checked={this.state.checked}/>
          <div className="section graph placeholder">
            <div className="options">
              <span className="btn btn-link drag"><span className="glyphicon glyphicon-th"></span></span>
              <button className="btn btn-link edit"><span className="glyphicon glyphicon-pencil"></span></button>
              <button className="btn btn-link remove"><span className="glyphicon glyphicon-remove"></span></button>
            </div>
            <div className="geogebra hidden">
              <div></div>
              <div className="geogebra-options">
                <button className="btn btn-success save col-md-6">Guardar cambios</button>
                <button className="btn btn-danger discard col-md-6">Descartar</button>
              </div>
            </div>
            <div className="graph-image hidden">
              <img/>
            </div>
          </div>
        </li>
      </div>
    )
  }
}
