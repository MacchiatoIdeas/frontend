import React from 'react';
import Navbar from '../Navbar';
import '../../style/editor.css';


export default class Title extends React.Component {
  render() {
    return (
      <div>
        <li>
          <div className="section title">
            <input className="pointer" type="radio" name="focus" hidden/>
            <div className="options">
              <span className="btn btn-link drag"><span className="glyphicon glyphicon-th"></span></span>
              <button className="btn btn-link remove remove"><span className="glyphicon glyphicon-remove"></span>
              </button>
            </div>
            <h1>
              <input type="text" className="section-input" placeholder="Inserte un título aquí"/>
            </h1>
          </div>
        </li>
      </div>
    )
  }
}
