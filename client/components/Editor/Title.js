import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../../style/editor.css';

import ClickOutHandler from 'react-onclickout';


export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      text: this.props.text !== undefined ? this.props.text : ''
    };

    this.onClickFocus = this.onClickFocus.bind(this);
    this.updateText = this.updateText.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onClickFocus() {
    console.log('Click!');
    this.refs.title.focus();
    this.setState({
      checked: true
    });
  }

  onBlur() {
    console.log('Blur!');
    this.setState({
      checked: false,
    });
  }

  updateText(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
        <ClickOutHandler onClickOut={this.onBlur}>
          <li onClick={this.onClickFocus}>
            <input className="pointer" type="radio" name="focus" checked={this.state.checked}/>
            <div className="section title">
              <div className="options">
                <span className="btn btn-link drag">
                  <span className="glyphicon glyphicon-th"/>
                </span>
                <button className="btn btn-link remove remove" onClick={() => this.props.remove(this.props.index)}>
                  <span className="glyphicon glyphicon-remove"/>
                </button>
              </div>
              <h1>
                <input ref="title" type="text" className="section-input" placeholder="Inserte un título aquí"
                       value={this.state.text} onChange={this.updateText}/>
              </h1>
            </div>
          </li>
        </ClickOutHandler>
      </div>
    )
  }
}
