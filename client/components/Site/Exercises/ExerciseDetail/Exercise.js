import React from 'react';

import AlternativeExercise from './AlternativeExercise';
import MatchingExercise from './MatchingExercise';
import Button from '../../../Utilities/TreniumButton';
import InlineDocument from '../../Document/InlineDocument';
import CompletionExercise from './CompletionExercise';
import TrueOrFalseExercise from './TrueOrFalseExercise';
import {getAnswerById, sendAnswer} from '../../../../requests/exercises';
import TreniumFormLoading from '../../../Utilities/TreniumForm/TreniumFormLoading';

export default class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.updateAnswer = this.updateAnswer.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);

    this.state = {
      answer: {},
      correction: {
        isCorrected: false,
        score: 0
      },
      correctAnswer: JSON.parse(this.props.exercise.right_answer),
      schema: JSON.parse(this.props.exercise.content).schema,
      isSending: false,
    };
  }

  componentDidMount() {

  }

  updateAnswer(answer) {
    this.setState({answer});
  }

  showSchema() {
    let content = JSON.parse(this.props.exercise.content);
    switch (content.schema) {
      case 'alternatives':
        return (<AlternativeExercise update={this.updateAnswer} answer={this.state.answer} content={content}/>);
      case 'matching':
        return (<MatchingExercise update={this.updateAnswer} answer={this.state.answer} content={content}/>);
      case 'completion':
        return (<CompletionExercise update={this.updateAnswer} answer={this.state.answer} content={content}/>);
      case 'trueorfalse':
        return (<TrueOrFalseExercise update={this.updateAnswer} answer={this.state.answer} content={content}/>);
    }
  }

  checkAnswer() {
    this.setState({isSending: true});

    sendAnswer(this.props.exercise.id, JSON.stringify(this.state.answer))
      .then(response => {
        getAnswerById(response.id)
          .then(response => {
            this.setState({
              isSending: false,
              correction: {
                isCorrected: true,
                score: response.score,
              }
            });
          });
      });
  }

  render() {
    let {exercise} = this.props;
    return (
      <div>
        <InlineDocument document={exercise}/>
        {this.showSchema.bind(this)()}

        {!this.state.correction.isCorrected ?
          <div>
            <TreniumFormLoading isSending={this.state.isSending}/>
            <Button onClick={this.checkAnswer}>Enviar respuestas</Button>
          </div>
          :
          <div className="text-center" style={{fontSize: 18}}>
            Ya contestó esta pregunta, su puntaje fue de: {this.state.correction.score}
          </div>
        }
      </div>
    )
  }
}
