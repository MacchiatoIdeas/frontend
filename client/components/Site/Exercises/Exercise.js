import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import AlternativeExercise from "./AlternativeExercise";
import MatchingExercise from "./MatchingExercise";


export default class Exercise extends React.Component {
  showSchema() {
    if (this.props.exercise.content.schema === 'alternatives')
      return (<AlternativeExercise alternatives={this.props.exercise.content.alts}/>)
    else if (this.props.exercise.content.schema === 'matching')
      return (<MatchingExercise sideA={this.props.exercise.content.sideA} sideB={this.props.exercise.content.sideB}/>)
  }

  render() {
    return (
      <div>
        <h1>{this.props.exercise.title}</h1>
        <p>{this.props.exercise.briefing}</p>
        {this.showSchema.bind(this)()}
      </div>
    )
  }
}
