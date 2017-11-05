import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Textarea from 'react-textarea-autosize';

import NewAlternatives from '../NewExercise/NewAlternatives';
import NewMatching from '../NewExercise/NewMatching';
import NewCompletion from '../NewExercise/NewCompletion'
import Editor from '../../../Editor/Editor';

import {Form} from '../../../Utilities/TreniumForm/style.less';

import style from '../NewExercise/Form.less';
import Header from '../../../Utilities/Header/index';

import * as icons from '../../../../assets/flaticons';
import NewTrueOrFalse from '../NewExercise/NewTrueOrFalse';
import ReactStars from 'react-stars';
import {updateExercise} from '../../../../requests/exercises';
import NewWritten from '../NewExercise/NewWritten';
import {getExerciseByIdAction} from '../../../../actions/exercises';
import {connect} from 'react-redux';
import BodyLoading from '../../../Utilities/BodyLoading/index';
import showAlert from '../../../Alert';
import HeaderSideButton from '../../../Utilities/Header/HeaderSideButton';
import ReactLoading from 'react-loading';

@connect(state => ({
  exercise: state.visibleExercise,
  auth: state.auth,
}), {
  getExerciseByIdAction
})
export default class ExerciseEdit extends React.Component {
  constructor(props) {
    super(props);

    this.updateBrief = this.updateBrief.bind(this);
    this.updateText = this.updateText.bind(this);
    this.updateQuestionAnswer = this.updateQuestionAnswer.bind(this);
    this.updateDifficulty = this.updateDifficulty.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.showSchema = this.showSchema.bind(this);

    this.state = {
      brief: '',
      text: [],
      question: {},
      answer: {},
      difficulty: 2,
      isLoading: true,
      isSending: false,
    };
  }

  componentDidMount() {
    this.props.getExerciseByIdAction(this.props.match.params.id)
      .then(response => {
        this.setState({
          brief: response.payload.briefing,
          text: JSON.parse(response.payload.text),
          question: JSON.parse(response.payload.content),
          answer: JSON.parse(response.payload.right_answer),
          difficulty: response.payload.difficulty,
          isLoading: false,
        });
      });
  }

  updateBrief(event) {
    this.setState({
      brief: event.target.value
    });
  }

  updateText(json) {
    this.setState({
      text: json
    });
  }

  updateQuestionAnswer(question, answer) {
    this.setState({
      question,
      answer,
    });
  }

  updateDifficulty(difficulty) {
    this.setState({
      difficulty,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.setState({isSending: true});

    const {brief, text, answer, difficulty, question} = this.state;
    const {id} = this.props.match.params;

    updateExercise(id, brief, difficulty, JSON.stringify(question), JSON.stringify(text), JSON.stringify(answer))
      .then(response => {
        showAlert('Ejercicio actualizado con éxito');
        this.setState({isSending: false});
      });
  }

  showSchema() {
    let {question, answer} = this.state;
    switch (question.schema) {
      case 'alternatives':
        return (<NewAlternatives update={this.updateQuestionAnswer} answer={answer} content={question}/>);
      case 'matching':
        return (<NewMatching update={this.updateQuestionAnswer} answer={answer} content={question}/>);
      case 'completion':
        return (<NewCompletion update={this.updateQuestionAnswer} answer={answer} content={question}/>);
      case 'trueorfalse':
        return (<NewTrueOrFalse update={this.updateQuestionAnswer} answer={answer} content={question}/>);
      case 'written':
        return (<NewWritten update={this.updateQuestionAnswer}/>);
    }
  }

  render() {
    const {isLoading} = this.state;

    if (isLoading) {
      console.log('ads', isLoading);
      return <BodyLoading/>;
    }
    console.log('ads', isLoading);

    return (
      <div>
        <Header icon={icons.exercises} color="#5DDDD3" sideButton={
          this.state.isSending ?
            <ReactLoading type="spin" delay={0} width={36} height={36}/>
            :
            <HeaderSideButton onClick={this.onFormSubmit} icon="floppy-disk">
              Guardar Ejercicio
            </HeaderSideButton>
        }>Editor de Ejercicios</Header>

        <section>
          <div className={Form} style={{paddingBottom: 0}}>
            <label>
              <div>Descripción</div>
              <Textarea value={this.state.brief} onChange={this.updateBrief} ref="experience"
                        placeholder="Aquí escriba una descripción del ejercicio"/>
            </label>
          </div>

          <div className={style.wrapper}>
            <div className={style.text}>Dificultad</div>
            <ReactStars count={4} value={this.state.difficulty} size={40} half={false}
                        onChange={this.updateDifficulty}/>
          </div>

          <div className={style.wrapper}>
            <div className={style.text}>Enunciado</div>
            <div className={style.editorContainer}>
              <Editor json={this.state.text} useTitle={false} update={this.updateText}/>
            </div>
          </div>

          <div className={style.wrapper}>
            {this.showSchema()}
          </div>

          <div className={style.wrapper}>

          </div>
        </section>
      </div>
    )
  }
}
