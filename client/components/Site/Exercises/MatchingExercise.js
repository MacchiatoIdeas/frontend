import React from 'react';

export default class MatchingExercise extends React.Component {
  constructor(props) {
    super(props);

    this.setNumber = this.setNumber.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      answers: []
    };

  }

  setNumber(index) {
    let answers = this.state.answers;
    this.setState({
      answers: answers.concat(index + 1)
    });
  }

  reset() {
    this.setState({
      answers: []
    });
  }

  render() {
    return (
      <div>
        <div className="col-sm-6">
          <div className="playlist playlist-accents">
            {this.props.sideA.map((alternative, i) => (
              <div key={i} className="alternative">
                <label htmlFor={`alternative${i}`} className="playlist-item">
                        <span className="playlist-item-body playlist-item-link">
                          <span className="step">{this.state.answers[i] !== undefined ? this.state.answers[i] : "?"}</span>
                          {alternative}
                        </span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="playlist playlist-accents">
            {this.props.sideB.map((alternative, i) => (
              <div key={i} className="alternative">
                <label className="playlist-item" onClick={() =>this.setNumber(i)}>
                        <span className="playlist-item-body playlist-item-link">
                          <span className="step">{i + 1}</span>
                          {alternative}
                        </span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <button className="btn btn-warning btn-block" onClick={this.reset}>Reiniciar</button>
        <div className="clearfix"/>
      </div>
    )
  }
}
