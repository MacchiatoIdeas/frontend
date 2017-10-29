import React from 'react';

import style from './EqualFields.less';

export default class EqualFields extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      error: false,
    }
  }

  onChange(e) {
    const {name, onChange} = this.props;

    e.preventDefault();

    let value1 = this.refs.value1.value;
    let value2 = this.refs.value2.value;

    onChange(name, value1, value1 === value2);

    this.setState({
      error: value1 !== value2,
    });
  }

  render() {
    const {text, placeholder, type = 'text'} = this.props;

    return (
      <div>
        <label>
          <div>{text}</div>
          <input type={type} ref="value1" onChange={this.onChange} placeholder={placeholder} required/>
        </label>

        <label>
          <div>Repetir {text.toLowerCase()}</div>
          <input type={type}
                 ref="value2"
                 className={this.state.error ? style.FieldError : ''}
                 onChange={this.onChange}
                 placeholder={placeholder}
                 required/>
        </label>
      </div>
    )
  }
}
