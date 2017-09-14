import React from 'react';

export default class AlternativeExercise extends React.Component {
  render() {
    console.log('ALTERNATIVE EXERCISE');
    return (
      <div className="playlist playlist-accents">
        {this.props.alternatives.map((alternative, i) => (
          <div key={i} className="alternative">
            <input className="alternative-radio" id={`alternative${i}`} type="radio" name="alternative"
                   hidden/>
            <label htmlFor={`alternative${i}`} className="playlist-item">
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