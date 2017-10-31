import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as denormalizers from '../../denormalizers';

import {getSubjectById} from '../../actions/subjects';

import SubjectBox from './SubjectBox';
import SubjectSidebar from './SubjectSidebar';
import Box from '../Box';
import Header from "../Utilities/Header/index";

import * as icons from '../../assets/flaticons';

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
      <div>
        <Header icon={icons.subject} color="#FFCA4F">{subject.name}</Header>

        <section>
          <div className="col-md-4">
            <SubjectBox subject={subject} showTitle/>
            <SubjectSidebar/>
          </div>

          <div className="col-md-8">
            <h1 className="page-header">Unidades</h1>

            <div className="list-group">
              {subject.units.map((unit, i) =>
                <Link to={`/site/units/${unit.id}`} key={i} className="list-group-item">
                  {unit.name}
                </Link>
              )}
            </div>

            <h1 className="page-header">Guías</h1>

            <div className="row">
              <div className="col-sm-12">
                {subject.guides.map((guide, i) =>
                  <Box
                    key={guide.id}
                    title={guide.title}
                    author={guide.author}
                    text={guide.brief}
                    link={`/site/guides/${guide.id}`}
                    date='25 de Mayo de 2017'/>
                )}
              </div>
            </div>
          </div>
          <div className="clearfix"/>
        </section>
      </div>
    )
  }
}
