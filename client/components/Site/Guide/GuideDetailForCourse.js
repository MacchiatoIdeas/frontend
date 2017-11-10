import React from 'react';

import style from '../../../style/FluidPage.less';
import Exercise from '../Exercises/ExerciseDetail/Exercise';
import Header from '../../Utilities/Header';

import * as icons from '../../../assets/flaticons';
import {Link, Redirect} from 'react-router-dom';

import InlineDocument from '../Document/InlineDocument';
import AddToCourseModal from './AddToCourseModal/index';
import {connect} from 'react-redux';
import {getCourseByIdAction} from '../../../actions/courses';
import Select from '../../Utilities/Select/index';
import BodyLoading from '../../Utilities/BodyLoading/index';
import TreniumForm from '../../Utilities/TreniumForm/index';
import TreniumButton from '../../Utilities/TreniumButton/index';
import TeacherScoreForm from './TeacherScoreForm';

@connect(state => ({
  auth: state.auth,
  course: state.visibleCourse,
}), {
  getCourseByIdAction
})
export default class GuideDetail extends React.Component {
  constructor(props) {
    super(props);

    this.onStudentChange = this.onStudentChange.bind(this);

    this.state = {
      showModal: false,
      student: 0,
      answers: {},
      answersLoaded: false,
    };
  }

  onStudentChange(studentId) {
    this.setState({
      student: studentId,
      answersLoaded: true,
    });

    let guideAnswer = this.props.course.guides.find(guide =>
      this.props.guide.id === guide.guide.id);

    let studentAnswers = guideAnswer.answers.filter(answer =>
      answer.student.user.id === studentId);

    const answers = {};

    studentAnswers.map(answer => {
      answers[answer.exercise.id] = answer;
    });

    this.setState({
      answers,
    });
  }

  componentDidMount() {
    const {courseId} = this.props.match.params;
    this.props.getCourseByIdAction(courseId);
  }

  render() {
    const {auth, guide, course} = this.props;

    if (course.isLoading) {
      return <BodyLoading/>;
    }

    if (auth.data.user_type !== 'teacher' || course.teacher.id !== auth.data.id) {
      return <Redirect to="/"/>
    }

    return (
      <div>
        <Header color="#efa467" textColor="#fff" icon={icons.guides} sideButton={
          <div>
            {auth.data.user_type === 'teacher' && auth.data.id === guide.author.id ?
              <Link to={`/site/guides/${guide.id}/edit`} style={{marginLeft: 32}}>
                <span className="glyphicon glyphicon-pencil"/>
              </Link>
              : null}
          </div>
        }>{guide.title}</Header>

        <section>
          <div className="row">
            <div className={`col-sm-8 ${style.content}`}>
              {guide.items.map((item, i) => {
                if (item.type === 'content') {
                  return (
                    <div key={i}>
                      <InlineDocument document={item.item}/>
                      <hr/>
                    </div>
                  );
                } else if (item.type === 'exercise') {
                  let answer = this.state.answers[item.item.id];

                  return (
                    <div key={i}>
                      <Exercise exercise={item.item}
                                visualize
                                score={this.state.answersLoaded ? JSON.parse(answer.score) : undefined}
                                tscore={this.state.answersLoaded ? JSON.parse(answer.tscore) : undefined}
                                answer={this.state.answersLoaded ? JSON.parse(answer.answer) : undefined}/>

                      {this.state.answersLoaded ?
                        <TeacherScoreForm answer={answer}/>
                        : null
                      }
                      <hr/>
                    </div>
                  )
                }
              })}
            </div>

            <div className="col-sm-4">
              <TreniumForm>
                <label>
                  <div>Respuestas</div>
                  <Select options={course.participants.map(student => ({
                    value: student.user.id,
                    name: `${student.user.first_name} ${student.user.last_name}`,
                  }))} onChange={this.onStudentChange}/>
                </label>
              </TreniumForm>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
