import React from 'react';

import AlternativeExercise from './AlternativeExercise';
import MatchingExercise from './MatchingExercise';
import style from './Exercise.less';
import Button from '../../Utilities/TreniumButton';

export default class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: {},
      correctAnswer: JSON.parse(this.props.exercise.right_answer),
    };

    this.updateAnswer = this.updateAnswer.bind(this);
    this.renderText = this.renderText.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  updateAnswer(answer) {
    this.setState({
      answer,
    });
  }

  showSchema() {
    let content = JSON.parse(this.props.exercise.content);
    if (content.schema === 'alternatives')
      return (<AlternativeExercise update={this.updateAnswer} content={content}/>);
    else if (content.schema === 'matching')
      return (<MatchingExercise sideA={this.props.exercise.content.sideA} sideB={this.props.exercise.content.sideB}/>)
  }

  renderText() {
    // Render exercise text
  }

  checkAnswer() {
    if (Object.keys(this.state.answer).length !== 0 || this.state.answer.constructor !== Object) {
      if (this.state.answer.answer === this.state.correctAnswer.answer) {
        alert('Respuesta Correcta');
      } else {
        alert('Respuesta Incorrecta');
      }
    } else {
      alert('Complete las preguntas');
    }
  }

  render() {
    return (
      <div>
        <p className="lead">{this.props.exercise.briefing}</p>
        {this.showSchema.bind(this)()}
        <Button onClick={this.checkAnswer}>Enviar respuestas</Button>
      </div>
    )
  }
}
