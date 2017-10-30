import React from 'react';
import {connect} from 'react-redux';

import {getAllSubjects} from '../../actions/subjects';
import SubjectBox from './SubjectBox';

import * as icons from '../../assets/flaticons';

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
        <Header icon={}>Materias</Header>

        <h1 className="page-header">Materias</h1>

        <div className="row">
          {this.props.subjects.map((subject, i) =>
            <div className="col-sm-4" key={i}>
              <SubjectBox subject={subject} showTitle={true}/>
            </div>
          )}
        </div>
      </div>
    )
  }
}
