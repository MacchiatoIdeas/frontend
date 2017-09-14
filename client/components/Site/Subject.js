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
    subject: denormalizers.subject({...subject}, state.units)
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
    const {subject} = this.props;

    if (this.props.isFetching) {
      return null;
    }

    const guides = [
      {
        id: 1,
        title: 'MockUp',
        brief: 'lorem ipsum dolor sit amet.',
        author: {
          first_name: 'Marcelo',
          last_name: 'Jara',
        }
      }
    ];

    return (
      <div className="container">
        <h1 className="page-header">
          {subject.name}
          <span className="glyphicon glyphicon-apple pull-right"/>
        </h1>

        <div className="row">
          <div className="col-sm-3">
            <SubjectBox subject={subject}/>
            <SubjectSidebar/>
          </div>

          <hr className="visible-xs"/>

          <div className="col-sm-9">
            <h2 className="page-header">Unidades</h2>

            <div className="row">
              <div className="col-sm-12">
                <div className="list-group">
                  {subject.units.map((unit, i) =>
                    <Link to={`/site/units/${unit.id}`} key={i} className="list-group-item">
                      {unit.name}
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <h2 className="page-header">Guías</h2>

            <div className="row">
              {guides.map((guide, i) =>
                <div className="col-md-6" key={i}>
                  <GuideBox guide={guide}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
