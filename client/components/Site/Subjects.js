import React from 'react';
import {connect} from 'react-redux';

import {getAllSubjects} from '../../actions/subjects';
import SubjectBox from './SubjectBox';

import * as icons from '../../assets/flaticons';
import Header from '../Portal/Header';

const denormalizeSubjects = (subjects) =>
  Object.keys(subjects).map(id => subjects[id]);

@connect(state => {
  return {
    subjects: denormalizeSubjects(state.subjects)
  }
}, {
  getAllSubjects
})
export default class Subjects extends React.Component {
  componentDidMount() {
    this.props.getAllSubjects();
  }

  render() {
    return (
      <div>
        <Header icon={icons.subject} color="#FFCA4F">Materias</Header>

        <section>
          <div className="row">
            {this.props.subjects.map((subject, i) =>
              <div className="col-sm-4" key={i}>
                <SubjectBox subject={subject} showTitle={true}/>
              </div>
            )}
          </div>
        </section>
      </div>
    )
  }
}
