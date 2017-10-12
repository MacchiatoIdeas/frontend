import React from 'react';

import style from './AlternativeExercise.less'

export default class AlternativeExercise extends React.Component {
  render() {
    return (
      <div className="playlist playlist-accents">
        {this.props.alternatives.map((alternative, i) => (
          <div key={i} className="alternative">
            <input className="alternative-radio" id={`alternative${i}`} type="radio" name="alternative"
                   hidden/>
            <label htmlFor={`alternative${i}`} className={`playlist-item ${style.alternative}`}>
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
