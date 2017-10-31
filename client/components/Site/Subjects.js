import React from 'react';
import {connect} from 'react-redux';
import {getAllSubjectsAction} from '../../actions/subjects';
import SubjectBox from './SubjectBox';
import * as icons from '../../assets/flaticons';
import Header from '../Utilities/Header';

@connect(state => ({
  subjects: Object.values(state.subjects)
}), {
  getAllSubjectsAction
})
export default class Subjects extends React.Component {
  componentDidMount() {
    this.props.getAllSubjectsAction();
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
