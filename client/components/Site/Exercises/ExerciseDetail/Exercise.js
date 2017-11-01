import React from 'react';

import AlternativeExercise from './AlternativeExercise';
import MatchingExercise from './MatchingExercise';
import Button from '../../../Utilities/TreniumButton';
import InlineDocument from '../../Document/InlineDocument';
import CompletionExercise from './CompletionExercise';

export default class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: {},
      correctAnswer: JSON.parse(this.props.exercise.right_answer),
      schema: JSON.parse(this.props.exercise.content).schema,
    };

    this.updateAnswer = this.updateAnswer.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  updateAnswer(answer) {
    this.setState({
      answer,
    });
  }

  showSchema() {
    let content = JSON.parse(this.props.exercise.content);
    switch (content.schema) {
      case 'alternatives':
        return (<AlternativeExercise update={this.updateAnswer} content={content}/>);

      case 'matching':
        return (<MatchingExercise update={this.updateAnswer} content={content}/>);

      case 'completion':
        return (<CompletionExercise update={this.updateAnswer} content={content}/>);
    }
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

        case 'completion':
          correct = this.areEqual(this.state.answer.words, this.state.correctAnswer.words);
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
    return (array1.length === array2.length) && array1.every(function (element, index) {
      return element === array2[index];
    });
  }

  render() {
    let {exercise} = this.props;
    return (
      <div>
        <InlineDocument document={exercise}/>
        {this.showSchema.bind(this)()}
        <Button onClick={this.checkAnswer}>Enviar respuestas</Button>
      </div>
    )
  }
}
