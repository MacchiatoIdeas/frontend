import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import Exercise from './Exercise';
import Comments from '../../Comments/index';
import {getExerciseByIdAction} from '../../../../actions/exercises';

import RecommendedExercises from '../RecommendedExercises';
import Header from '../../../Utilities/Header/index';

import * as icons from '../../../../assets/flaticons';

import {Form} from '../../../Utilities/TreniumForm/style.less';

import style from './style.less';
import Menu, {active} from '../../../Utilities/TreniumMenu/index';

import BodyLoading from '../../../Utilities/BodyLoading/index';
import AddToGuideModal from '../../AddToGuideModal/AddToGuideModal';
import {formatDateToLocale} from '../../../Box';

@connect((state, props) => ({
  exercise: state.visibleExercise,
  auth: state.auth,
}), {
  getExerciseByIdAction
})
export default class ExerciseDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    }
  }

  componentDidMount() {
    this.props.getExerciseByIdAction(this.props.match.params.id);
  }

  render() {
    const {auth, exercise} = this.props;

    if (exercise.isLoading) {
      return <BodyLoading/>;
    }

    return (
      <div>
        <Header icon={icons.exercises} color="#5DDDD3" sideButton={
          auth.data.user_type === 'teacher' ?
            <Link to="#" onClick={() => this.setState({showModal: true})}>
              <span className="glyphicon glyphicon-plus-sign"/>
            </Link>
            : null
        }>{exercise.unit.name}</Header>

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
                  {formatDateToLocale(exercise.moment)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="clearfix"/>

        <br/>

        <section>
          <Menu>
            <NavLink exact to={`/site/exercises/${exercise.id}`} activeClassName={active}>Comentarios</NavLink>
          </Menu>
        </section>

        <Comments exercise={exercise} comments={exercise.comments}/>

        {auth.data.user_type === 'teacher' ?
          <AddToGuideModal exerciseId={exercise.id}
                           subjectId={exercise.unit.subject.id}
                           show={this.state.showModal}
                           onHide={() => {this.setState({showModal: false})}}/>
          : null}
      </div>
    )
  }
}
