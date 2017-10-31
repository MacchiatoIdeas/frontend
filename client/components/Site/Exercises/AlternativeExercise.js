import React from 'react';

import style from './AlternativeExercise.less'

export default class AlternativeExercise extends React.Component {
  updateAnswer(index) {
    let json = {
      schema: 'alternatives',
      answer: index,
    };
    this.props.update(json);
  }

  render() {
    console.log(this.props.content);
    return (
      <div className="playlist playlist-accents">
        {this.props.content.alts.map((alternative, i) => (
          <div key={i} className="alternative">
            <input className="alternative-radio" id={`alternative${i}`} type="radio" name="alternative"
                   hidden/>
            <label htmlFor={`alternative${i}`} className={`playlist-item ${style.alternative}`} onClick={() => this.updateAnswer(i)}>
                        <span className="playlist-item-body playlist-item-link">
                          <span className="icon-play-v3 step"/>
                          {alternative}
                        </span>
            </label>
          </div>
        ))}
      </div>
    )
  }
}
