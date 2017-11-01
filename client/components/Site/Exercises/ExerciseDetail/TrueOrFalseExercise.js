import React from 'react';
import style from './TrueOrFalseExercise.less';

export default class TrueOrFalseExercise extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.content);

    let choices = [];
    for (let i = 0; i < this.props.content.sentences.length; i++)
      choices.push(false);
    this.state = {
      choices: choices,
    };

    this.updateAnswer = this.updateAnswer.bind(this);
  }

  updateAnswer(choices = []) {
    let json = {
      schema: 'trueorfalse',
      choices: choices !== [] ? choices : this.state.choices,
    };
    this.props.update(json);
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
                          <span className="step">{i + 1}</span>
                          {alternative}
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