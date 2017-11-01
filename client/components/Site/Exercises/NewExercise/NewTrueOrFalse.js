import React from 'react';
import {Form} from '../../../Utilities/TreniumForm/style.less';
import TrueOrFalseLine from "./TrueOrFalseLine";

export default class NewTrueOrFalse extends React.Component {
  constructor(props) {
    super(props);

    this.onSentenceChange = this.onSentenceChange.bind(this);
    this.onSentenceClick = this.onSentenceClick.bind(this);
    this.updateParent = this.updateParent.bind(this);

    this.state = {
      sentences: [
        '',
      ],
      choices: [
        false,
      ],
    };
  }

  onSentenceChange(index, newValue) {
    let sentences = [...this.state.sentences];
    let choices = this.state.choices;
    sentences[index] = newValue;

    if (index === sentences.length - 1 && newValue !== '') {
      sentences.push('');
      choices.push(false);
    }

    if (newValue === '') {
      sentences.splice(index, 1);
      choices.splice(index, 1);
    }

    this.setState({
      sentences,
      choices,
    });
    this.updateParent(sentences, choices);
  }

  onSentenceClick(index) {
    let choices = this.state.choices;
    choices[index] = !choices[index];
    this.setState({
      choices
    });
    this.updateParent(null, choices);
  }

  updateParent(sentences, correctAnswer) {
    let question = {
      schema: 'trueorfalse',
      sentences: sentences !== null ? sentences.slice(0, -1) : this.state.sentences.slice(0, -1),
    };
    let choices = {
      schema: 'trueorfalse',
      choices: correctAnswer !== null ? correctAnswer.slice(0, -1) : this.state.choices.slice(0, -1),
    };
    this.props.update(question, choices);
  }

  render() {
    return (
      <div className={Form} style={{paddingLeft: 0, paddingRight: 0}}>
        <label style={{marginBottom: 0}}>
          <div>Verdadero o Falso</div>
        </label>

        {this.state.sentences.map((alt, i) =>
          <TrueOrFalseLine value={alt} onChange={this.onSentenceChange} onClick={this.onSentenceClick} index={i}
                           key={i} isTrue={this.state.choices[i]}/>)}
      </div>
    )
  }
}