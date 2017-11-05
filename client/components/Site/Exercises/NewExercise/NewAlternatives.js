import React from 'react';

import {Form} from '../../../Utilities/TreniumForm/style.less';
import Alternative from './Alternative';

export default class NewAlternatives extends React.Component {
  constructor(props) {
    super(props);

    this.onAlternativeChange = this.onAlternativeChange.bind(this);
    this.onAlternativeClick = this.onAlternativeClick.bind(this);
    this.updateParent = this.updateParent.bind(this);

    this.state = {
      alternatives: this.props.content !== undefined ? this.props.content.alts : [''],
      answer: this.props.answer !== undefined ? this.props.answer.answer : undefined,
    };
  }

  onAlternativeChange(index, newValue) {
    let alternatives = [...this.state.alternatives];
    let answer = this.state.answer;
    alternatives[index] = newValue;

    if (index === alternatives.length - 1 && newValue !== '') {
      alternatives.push('');
    }

    if (newValue === '') {
      alternatives.splice(index, 1);
    }

    if (answer > alternatives.length - 2) {
      answer = undefined;
    }

    this.setState({
      alternatives,
      answer,
    });
    this.updateParent(alternatives, answer);
  }

  onAlternativeClick(answer) {
    this.setState({
      answer
    });
    this.updateParent(null, answer);
  }

  updateParent(alternatives, correctAnswer) {
    let question = {
      schema: 'alternatives',
      alts: alternatives !== null ? alternatives.slice(0, -1) : this.state.alternatives.slice(0, -1),
    };
    let answer = {
      schema: 'alternatives',
      answer: correctAnswer !== null ? correctAnswer : this.state.answer,
    };
    this.props.update(question, answer);
  }

  render() {
    return (
      <div className={Form} style={{paddingLeft: 0, paddingRight: 0}}>
        <label style={{marginBottom: 0}}>
          <div>Alternativas</div>
        </label>

        {this.state.alternatives.map((alt, i) =>
          <Alternative value={alt} onChange={this.onAlternativeChange} onClick={this.onAlternativeClick} index={i}
                       key={i} selected={i === this.state.answer}/>)}
      </div>
    )
  }
}
