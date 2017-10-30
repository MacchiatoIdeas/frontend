import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import Exercise from './Exercise';
import Comments from '../Comments/Comments';
import {getExerciseById} from '../../../actions/exercises';

import RecommendedExercises from './RecommendedExercises';
import style from './ExerciseDetail.less'
import AddItemModal from '../Guide/AddItemModal';
import Header from '../../Portal/Header/index';

import * as icons from '../../../assets/flaticons';
import AppuntaModal from "../../Utilities/AppuntaModal/index";

import {Form} from '../../Utilities/Form/style.less';
import Select from "../../Utilities/Select/index";

@connect((state, props) => {
  let exercise = state.exercises[props.match.params.exerciseId];
  if (!exercise || !exercise.content) {
    return {isFetching: true};
  }

  exercise = {
    ...exercise,
    content: JSON.parse(exercise.content),
    right_answer: JSON.parse(exercise.right_answer),
  };

  return {
    auth: state.auth,
    exercise
  }
}, {
  getExerciseById
})
export default class ExerciseDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    }
  }

  componentWillMount() {
    this.props.getExerciseById(this.props.match.params.exerciseId);
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }

    let {exercise, unit} = this.props;
    const {auth} = this.props;

    return (
      <div>
        <Header icon={icons.exercises} color="#5DDDD3" sideButton={
          <Link to="#" onClick={() => this.setState({showModal: true})}>
            <span className="glyphicon glyphicon-plus-sign"/>
          </Link>
        }>{unit.name}</Header>

        <section>
          <div className="row">
            <div className="col-sm-12">
              <Exercise exercise={exercise}/>
            </div>
          </div>
          <div className="clearfix"/>
        </section>
        <RecommendedExercises/>
        <Comments exercise={exercise} comments={exercise.comments}/>

        <AppuntaModal show={this.state.showModal}
                      onHide={() => this.setState({showModal: false})}
                      title="Agregar ejercicio a guía"
                      icon={icons.guidesv2}
                      color="#FFCA4F">
          <form className={Form}>
            <label>
              <div>Curso</div>
              <Select options={[
                {
                  value: 1,
                  name: 'Guia numero uno',
                  sideText: 'Lenguaje'
                }, {
                  value: 2,
                  name: 'Guia numero dos',
                  sideText: 'Lenguaje'
                }
              ]}/>
            </label>

            <button>Continuar</button>
          </form>
        </AppuntaModal>
      </div>
    )
  }
}
