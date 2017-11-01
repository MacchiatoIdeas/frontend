import React from 'react';

export default class TrueOrFalseExercise extends React.Component {
  constructor(props) {
    super(props);

    this.updateAnswer = this.updateAnswer.bind(this);
  }

  updateAnswer(words = []) {
    let json = {
      schema: 'trueorfalse',
      choices: words !== [] ? words : this.state.words,
    };
    this.props.update(json);
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}