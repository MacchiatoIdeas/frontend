import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as denormalizers from '../../denormalizers';

import {getSubjectById} from '../../actions/subjects';

import SubjectBox from './SubjectBox';
import SubjectSidebar from './SubjectSidebar';
import GuideBox from './GuideBox';

@connect((state, props) => {
  let subject = state.subjects[props.match.params.id];
  if (!subject || !subject.units) {
    return {isFetching: true}
  }

  return {
    subject: denormalizers.subject({...subject}, state)
  }
}, {
  getSubjectById
})
export default class Subject extends React.Component {
  componentWillMount() {
    const {id} = this.props.match.params;
    this.props.getSubjectById(id);
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }

    const {subject} = this.props;

    return (
      <section>
        <div className="col-sm-12">
          <h1>
            {subject.name}
          </h1>
        </div>

        <div className="col-md-4">
          <SubjectBox subject={subject} showTitle={false}/>
          <SubjectSidebar/>
        </div>

        <hr className="visible-xs"/>

        <div className="col-md-8">
          <h2 className="page-header color blue">Unidades</h2>

          <div className="list-group">
            {subject.units.map((unit, i) =>
              <Link to={`/site/units/${unit.id}`} key={i} className="list-group-item">
                {unit.name}
              </Link>
            )}
          </div>

          <h2 className="page-header color blue">Guías</h2>

          <div className="row">
            {subject.guides.map((guide, i) =>
              <div className="col-md-6" key={i}>
                <GuideBox guide={guide}/>
              </div>
            )}
          </div>
        </div>
        <div className="clearfix"/>
      </section>
    )
  }
}
