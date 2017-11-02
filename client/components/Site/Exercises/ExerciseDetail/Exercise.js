import React from 'react';

import AlternativeExercise from './AlternativeExercise';
import MatchingExercise from './MatchingExercise';
import Button from '../../../Utilities/TreniumButton';
import InlineDocument from '../../Document/InlineDocument';
import CompletionExercise from './CompletionExercise';
import TrueOrFalseExercise from './TrueOrFalseExercise';
import {getAnswerById, getPreviousAnswer, sendAnswer} from '../../../../requests/exercises';
import TreniumFormLoading from '../../../Utilities/TreniumForm/TreniumFormLoading';
import {connect} from "react-redux";
import WrittenExercise from "./WrittenExercise";

@connect(state => ({
  auth: state.auth,
}))
export default class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.updateAnswer = this.updateAnswer.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);

    this.state = {
      answer: props.answer !== undefined ? props.answer : {},
      correction: {
        isCorrected: false,
        score: 0
      },
      correctAnswer: JSON.parse(this.props.exercise.right_answer),
      schema: JSON.parse(this.props.exercise.content).schema,
      isSending: false,
    };
  }

  componentWillReceiveProps(props) {
    if (props.answer) {
      this.setState({
        answer: props.answer,
        correction: {
          isCorrected: true,
          score: props.score
        }
      });
    }
  }

  componentDidMount() {
    if (this.props.auth.data.user_type === 'teacher') {
      return;
    }

    getPreviousAnswer(this.props.exercise.id)
      .then(response => {
        if (response.length > 0) {
          let answer = response[0];
          this.setState({
            correction: {
              isCorrected: true,
              score: answer.score,
            },
            answer: JSON.parse(answer.answer),
          })
        }
      });
  }

  updateAnswer(answer) {
    if (this.props.auth.data.user_type === 'teacher') {
      return;
    }

    if (!this.state.correction.isCorrected) {
      this.setState({answer});
    }
  }

  showSchema() {
    console.log(this.state.answer);

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
      case 'written':
        return (<WrittenExercise update={this.updateAnswer} answer={this.state.answer} content={content}/>);
    }
  }

  checkAnswer() {
    if (this.props.auth.data.user_type === 'teacher') {
      return;
    }

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
    let {exercise, auth} = this.props;

    return (
      <div>
        <InlineDocument document={exercise}/>
        <br/>
        {this.showSchema.bind(this)()}

        {auth.data.user_type === 'student' ?
          <div>
            {!this.state.correction.isCorrected ?
              <div>
                <TreniumFormLoading isSending={this.state.isSending}/>
                <Button onClick={this.checkAnswer}>Enviar respuestas</Button>
              </div>
              :
              <div className="text-center" style={{fontSize: 18}}>
                Puntaje: {this.state.correction.score}
              </div>}
          </div>
          : null
        }

        {this.state.correction.score ?
          <div className="text-center" style={{fontSize: 18}}>
            Puntaje: {this.state.correction.score}
          </div>
          : null}
      </div>
    )
  }
}
