import React from 'react';
import style from './CompletionExercise.less';

export default class CompletionExercise extends React.Component {
  constructor(props) {
    super(props);

    let count = (this.props.content.text.match(/\?\?/g) || []).length;
    let words = [];
    for (let i = 0; i < count; i++) {
      words.push("");
    }

    this.state = {
      words: words,
    };

    this.formatText = this.formatText.bind(this);
    this.flatMap = this.flatMap.bind(this);
    this.updateText = this.updateText.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  updateAnswer(words = []) {
    let json = {
      schema: 'completion',
      words: words !== [] ? words : this.state.words,
    };
    this.props.update(json);
  }

  updateText(ev, index) {
    let {words} = this.state;
    words[index] = ev.target.value;
    this.setState({
      words,
    });
    this.updateAnswer(words);
  }

  flatMap(array, fn) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let mapping = fn(array[i], this.state.words[i], i);
      result = result.concat(mapping);
    }
    return result;
  }

  formatText() {
    let formatted = this.props.content.text;

    formatted = formatted.split('??');
    formatted.pop();
    console.log(formatted);
    formatted = formatted.map((item, index) => {
      return (
        <span key={index}>
          {item} <input type="text" onChange={(ev) => this.updateText(ev, index)} value={this.state.words[index]}/>
        </span>
      )
    });
    return formatted
  }

  render() {
    return (
      <div>
        <p className={style.paragraph}>{this.formatText()}</p>
      </div>
    )
  }
}