import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Exercise from '../Exercise';
import Comments from '../../Comments/index';
import {getExerciseById} from '../../../../actions/exercises';

import RecommendedExercises from '../RecommendedExercises';
import Header from '../../../Portal/Header/index';

import * as icons from '../../../../assets/flaticons';
import AppuntaModal from '../../../Utilities/AppuntaModal/index';

import {Form} from '../../../Utilities/Form/style.less';
import Select from '../../../Utilities/Select/index';

import style from './style.less';

@connect((state, props) => {
  let exercise = state.exercises[props.match.params.exerciseId];
  if (!exercise || !exercise.content) {
    return {isFetching: true};
  }

  exercise = {
    ...exercise,
    content: JSON.parse(exercise.content),
    right_answer: JSON.parse(exercise.right_answer),
    author: {
      first_name: 'Marcelo',
      last_name: 'Jara'
    }
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
            <div className="col-sm-8 col-sm-offset-2">
              <Exercise exercise={exercise}/>
            </div>
          </div>
          <div className="clearfix"/>

          <div className="col-md-6 col-sm-offset-2">
            <div className={`row ${style.Author}`}>
              <div className="col-sm-1">
                <img src="http://www.twitrcovers.com/wp-content/uploads/2012/11/Gaussian-Blur-l.jpg"
                     className={style.profilePic}/>
              </div>

              <div className="col-sm-11">
                <div>
                  <Link to={`/site/users/${exercise.author.id}`}>
                    {exercise.author.first_name}
                    {' '}
                    {exercise.author.last_name}
                  </Link>
                </div>

                <div>
                  25 de Mayo de 2017
                </div>
              </div>
            </div>
          </div>
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
