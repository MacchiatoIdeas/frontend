import React from 'react';

import style from './AlternativeExercise.less'
import MarkdownKatex from "../../Document/MarkdownKatex/index";

export default class AlternativeExercise extends React.Component {
  updateAnswer(index) {
    let json = {
      schema: 'alternatives',
      answer: index,
    };
    this.props.update(json);
  }

  render() {
    return (
      <div className="playlist playlist-accents">
        {this.props.content.alts.map((alternative, i) => (
          <div key={i} className="alternative">
            <input className="alternative-radio" id={`alternative${i}`} type="radio" name="alternative"
                   hidden/>

            <label htmlFor={`alternative${i}`} className={`playlist-item ${style.alternative}`} onClick={() => this.updateAnswer(i)}>
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
