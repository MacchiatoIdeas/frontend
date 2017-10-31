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
      schema: JSON.parse(this.props.exercise.content).schema,
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
      return (<MatchingExercise update={this.updateAnswer} content={content}/>)
  }

  renderText() {
    // Render exercise text
  }

  checkAnswer() {
    let {schema} = this.state;
    let correct = false;
    if (Object.keys(this.state.answer).length !== 0 || this.state.answer.constructor !== Object) {
      switch (schema) {
        case 'alternatives':
          correct = this.state.answer.answer === this.state.correctAnswer.answer;
          break;

        case 'matching':
          correct = this.areEqual(this.state.answer.matchs, this.state.correctAnswer.matchs);
          break;
      }

      if (correct) {
        alert('Respuesta Correcta');
      } else {
        alert('Respuesta Incorrecta');
      }

    } else {
      alert('Complete las preguntas');
    }
  }

  areEqual(array1, array2) {
    return (array1.length === array2.length) && array1.every(function(element, index) {
      return element === array2[index];
    });
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
