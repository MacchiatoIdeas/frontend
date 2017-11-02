import React from 'react';

import style from './AlternativeExercise.less'
import MarkdownKatex from '../../Document/MarkdownKatex';

export default class AlternativeExercise extends React.Component {
  updateAnswer(index) {
    this.props.update({
      schema: 'alternatives',
      answer: index,
    });
  }

  render() {
    const {answer} = this.props;

    return (
      <div className="playlist playlist-accents">
        {this.props.content.alts.map((alternative, i) => (
          <div key={i} className="alternative">
            <label className={`playlist-item ${style.alternative} ${answer.answer === i ? style.AlternativeActive : ''}`}
                   onClick={() => this.updateAnswer(i)}>
              <span className={`playlist-item-body playlist-item-link ${style.playlist}`}>
                <span className="icon-play-v3 step"/>
                <MarkdownKatex markdown={alternative}/>
                </span>
            </label>
          </div>
        ))}
      </div>
    )
  }
}
