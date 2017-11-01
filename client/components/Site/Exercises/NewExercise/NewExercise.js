import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Textarea from 'react-textarea-autosize';

import NewAlternatives from './NewAlternatives';
import NewMatching from './NewMatching';
import NewCompletion from './NewCompletion'
import Editor from '../../../Editor/Editor';

import {Form} from '../../../Utilities/TreniumForm/style.less';

import style from './Form.less';
import Header from "../../../Utilities/Header/index";

import * as icons from '../../../../assets/flaticons';
import NewTrueOrFalse from "./NewTrueOrFalse";
import ReactStars from 'react-stars'


export default class NewExercise extends React.Component {
  constructor(props) {
    super(props);

    this.updateBrief = this.updateBrief.bind(this);
    this.updateText = this.updateText.bind(this);
    this.updateQuestionAnswer = this.updateQuestionAnswer.bind(this);
    this.updateDifficulty = this.updateDifficulty.bind(this);

    this.state = {
      brief: '',
      content: {},
      text: [],
      question: {},
      answer: {},
      difficulty: 2,
    };

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

  render() {
    return (
      <div>
        <Header icon={icons.exercises} color="#5DDDD3">Editor de Ejercicios</Header>

        <section>
          <div className={Form} style={{paddingBottom: 0}}>
            <label>
              <div>Descripción</div>
              <Textarea onChange={this.updateBrief} ref="experience"
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
              <Editor useTitle={false} update={this.updateText}/>
            </div>
          </div>

          <div className={style.wrapper}>
            <Switch>
              <Route path="/site/units/:id/exercises/create/alternatives" render={({match}) => (
                <NewAlternatives update={this.updateQuestionAnswer} match={match}/>
              )}/>
              <Route path="/site/units/:id/exercises/create/matching" render={({match}) => (
                <NewMatching update={this.updateQuestionAnswer} match={match}/>
              )}/>
              <Route path="/site/units/:id/exercises/create/completion" render={({match}) => (
                <NewCompletion update={this.updateQuestionAnswer} match={match}/>

              )}/>
              <Route path="/site/units/:id/exercises/create/trueorfalse" render={({match}) => (
                <NewTrueOrFalse update={this.updateQuestionAnswer} match={match}/>

              )}/>
            </Switch>
          </div>
        </section>
      </div>
    )
  }
}
