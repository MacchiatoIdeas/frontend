import React from 'react';
import style from './TrueOrFalseExercise.less';
import MarkdownKatex from "../../Document/MarkdownKatex/index";

export default class TrueOrFalseExercise extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.content);

    let choices = [];
    for (let i = 0; i < this.props.content.sentences.length; i++)
      choices.push(null);
    this.state = {
      choices: choices,
    };

    this.updateAnswer = this.updateAnswer.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.getStyle = this.getStyle.bind(this);
  }

  updateAnswer(choices = []) {
    let json = {
      schema: 'trueorfalse',
      choices: choices !== [] ? choices : this.state.choices,
    };
    this.props.update(json);
  }

  getStyle(value, index) {
    let current = this.state.choices[index];
    let className = current === value ? style.selected : '';
    className = className.concat(` ${current !== value ? style.noSelected : ''}`);
    return className

  }

  updateItem(value, index) {
    let {choices} = this.state;
    choices[index] = value;
    this.setState({
      choices,
    });
    this.updateAnswer(choices);
  }



  render() {
    return (
      <div>
        <div className="playlist playlist-accents">
          <ul ref="list">
            {this.props.content.sentences.map((alternative, i) => (
              <li key={i} className={style.item}>
                <div className="alternative">
                  <label className="playlist-item">
                        <span className="playlist-item-body playlist-item-link">
                          <span className={`step ${style.step}`}>
                            <button onClick={() => this.updateItem(true, i)} className={`${style.true} ${this.getStyle(true, i)}`}>V</button>
                            <button onClick={() => this.updateItem(false, i)} className={`${style.false} ${this.getStyle(false, i)}`}>F</button>
                        </span>
                          <MarkdownKatex markdown={alternative}/>
                        </span>
                  </label>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
    )
  }
}