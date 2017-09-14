import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from "react-redux";

import SubjectBox from '../SubjectBox';
import UnitSidebar from "../Unit/UnitSidebar";
import MatchingExercise from "./MatchingExercise";
import Exercises from "./Exercise";
import AlternativeExercise from "./AlternativeExercise";
import {getExerciseById} from "../../../actions/exercises";

@connect((state, props) => {
  let exercise = state.exercises[props.match.params.exerciseId];
  if (!exercise || !exercise.content) {
    return {isFetching: true};
  }

  exercise = {
    ...exercise,
    content: JSON.parse(exercise.content),
    right_answer: JSON.parse(exercise.right_answer)
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

    /*
    let exercise = {
      title: 'Título Primer Ejercicio',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque eligendi eos facere illum itaque labore maxime molestias nesciunt, obcaecati optio quis sed sequi, similique soluta tenetur ullam voluptatum! Numquam!',
      author: {
        first_name: 'Marcelo Ignacio',
        last_name: 'Jara Almeyda',
        banner: 'http://www.fotor.com/images2/features/blur/022.jpg'
      },
      alternatives: [
        'Primera Alternativa',
        'Segunda Alternativa',
        'Tercera Alternativa',
        'Cuarta Alternativa',
      ],
      correctAnswer: 2,
    };
    */

    // AQUI HERNAN!
    let {exercise, unit} = this.props;
    console.log(exercise);

    return (
      <div>
        <div className="col-sm-3">
          <SubjectBox subject={unit.subject}/>
          <UnitSidebar type="exercises" unit={unit}/>
        </div>

        <div className="col-sm-9">
          <div className="row">
            <div className="col-sm-12">
              <div className="box box-fill">
                <div className="box-body exercise">
                  <Exercises exercise={exercise}/>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="box box-fill">
                <div className="box-body ">
                  <button className="btn btn-default">Anterior</button>
                  <button className="btn btn-success pull-right">Siguiente ejercicio</button>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="box box-fill">
                <div className="box-body text-center">
                  <h2 className="text-center">Ejercicios recomendados</h2>
                  <h2 className="text-center">...</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
