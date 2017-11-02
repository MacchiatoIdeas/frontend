import React from 'react';

import style from '../../../style/FluidPage.less';
import Exercise from '../Exercises/ExerciseDetail/Exercise';
import Header from '../../Utilities/Header';

import * as icons from '../../../assets/flaticons';
import {Link} from 'react-router-dom';

import InlineDocument from '../Document/InlineDocument';
import AddToCourseModal from './AddToCourseModal/index';
import {connect} from 'react-redux';
import {getCourseByIdAction} from "../../../actions/courses";
import Select from "../../Utilities/Select/index";
import BodyLoading from "../../Utilities/BodyLoading/index";

@connect(state => ({
  auth: state.auth,
  course: state.visibleCourse,
}), {
  getCourseByIdAction
})
export default class GuideDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
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

    return (
      <div>
        <Header color="#efa467" textColor="#fff" icon={icons.guides} sideButton={
          <div>
            {auth.data.id === guide.author.id ?
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
                  console.log(item.item);
                  return (
                    <div key={i}>
                      <Exercise exercise={item.item} autoCorrect/>
                      <hr/>
                    </div>
                  )
                }
              })}
            </div>

            <div>
              <Select options={course.participants.map(student => ({
                value: student.user.id,
                name: student.user.first_name,
              }))}/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
