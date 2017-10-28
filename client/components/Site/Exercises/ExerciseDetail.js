import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import Exercise from './Exercise';
import Comments from '../Comments/Comments';
import {getExerciseById} from '../../../actions/exercises';

import RecommendedExercises from "./RecommendedExercises";
import style from './ExerciseDetail.less'
import AddItemModal from "../Guide/AddItemModal";

@connect((state, props) => {
  let exercise = state.exercises[props.match.params.exerciseId];
  if (!exercise || !exercise.content) {
    return {isFetching: true};
  }

  exercise = {
    ...exercise,
    content: JSON.parse(exercise.content),
    right_answer: JSON.parse(exercise.right_answer),
    auth: state.auth,
  };

  return {
    exercise
  }
}, {
  getExerciseById
})
export default class ExerciseDetail extends React.Component {
  componentWillMount() {
    this.props.getExerciseById(this.props.match.params.exerciseId);
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }

    let {exercise, unit} = this.props;
    const {auth} = this.props;

    console.log(auth);

    let addItem;

    if (auth.isAuthenticated) {
      addItem = (
        <div>
          <hr/>
          <div className="row">
            <div className="col-sm-2">
              <AddItemModal exercise={exercise}/>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        <section>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-12">
                <Exercise exercise={exercise}/>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className={`col-sm-12 ${style.navButtonsWrapper}`}>
                <button className="btn btn-primary">Ejercicio anterior</button>
                <button className="btn btn-success pull-right">Siguiente ejercicio</button>
              </div>
            </div>
            {addItem}
          </div>
          <div className="clearfix"/>
        </section>
        <RecommendedExercises/>
        <Comments exercise={exercise} comments={exercise.comments}/>
      </div>
    )
  }
}
