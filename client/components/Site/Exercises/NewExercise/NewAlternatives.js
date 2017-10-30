import React from 'react';

import {Form} from '../../../Utilities/Form/style.less';
import Alternative from './Alternative';

export default class NewAlternatives extends React.Component {
  constructor(props) {
    super(props);

    this.onAlternativeChange = this.onAlternativeChange.bind(this);

    this.state = {
      alternatives: [
        '',
      ],
    };
  }

  onAlternativeChange(index, newValue) {
    let alternatives = [...this.state.alternatives];
    alternatives[index] = newValue;

    if (index === alternatives.length - 1 && newValue !== '') {
      alternatives.push('');
    }

    if (newValue === '') {
      alternatives.splice(index, 1);
    }

    this.setState({
      alternatives,
    });
  }

  render() {
    return (
      <div className={Form} style={{paddingLeft: 0, paddingRight: 0}}>
        <label style={{marginBottom: 0}}>
          <div>Alternativas</div>
        </label>

        {this.state.alternatives.map((alt, i) =>
          <Alternative value={alt} onChange={this.onAlternativeChange} index={i} key={i}/>)}
      </div>
    )
  }
}
