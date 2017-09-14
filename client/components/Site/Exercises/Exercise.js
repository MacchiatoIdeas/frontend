import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import AlternativeExercise from "./AlternativeExercise";
import MatchingExercise from "./MatchingExercise";


export default class Exercise extends React.Component {

  showSchema() {

  }

  render() {
    console.log('EXERCISE DETAIL');
    const {unit} = this.props;


    return (
      <div>
        <h1>{this.props.exercise.title}</h1>
        <p>{this.props.exercise.summary}</p>
        {/*<AlternativeExercise alternatives={exercise.alternatives}/>*/}
        <MatchingExercise sideA={this.props.exercise.sideA} sideB={this.props.exercise.sideB}/>
      </div>

    )
  }
}
