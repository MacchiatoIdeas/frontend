import React from 'react';

import style from './style.less';
import Option from './Option';

export default class Select extends React.Component {
  constructor(props) {
    super(props);

    this.onOptionClick = this.onOptionClick.bind(this);

    this.state = {
      selected: 0,
    };
  }

  componentWillReceiveProps({options}) {
    this.setState({
      selected: options.length > 0 ? options[0].value : 0,
    });
  }

  onOptionClick(value) {
    const {onChange} = this.props;

    this.setState({
      selected: value,
    });

    onChange(value);
  }

  render() {
    const {options} = this.props;
    const {selected} = this.state;

    return (
      <section style={{padding: '0 8px'}} className={style.Select}>
        {options.map((option, i) =>
          <Option checked={selected === option.value} value={option.value} onClick={this.onOptionClick} key={i}>
            <span className={`pull-right ${style.sideText}`}>{option.sideText}</span>
            {option.name}
          </Option>
        )}
      </section>
    )
  }
}
