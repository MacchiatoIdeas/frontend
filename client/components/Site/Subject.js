import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getSubjectById} from '../../actions/subjects';

import SubjectBox from './SubjectBox';

const denormalizeSubject = (subject, units) => {
  subject.units = subject.units.map(id => units[id]);
  return subject;
};


@connect((state, props) => {
  let subject = state.subjects[props.match.params.id];
  if (!subject) {
    return {
      isFetching: true
    }
  }

  if (!subject.units) {
    return {
      isFetching: true
    }
  }

  return {
    subject: denormalizeSubject({...subject}, state.units)
  }
}, {
  getSubjectById
})
export default class Subject extends React.Component {
  loadData() {
    const {id} = this.props.match.params;
    this.props.getSubjectById(id);
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const {subject} = this.props;

    if (this.props.isFetching) {
      return null;
    }

    return (
      <div className="subject">
        <h1 className="page-header">
          {subject.name}
          <span className="glyphicon glyphicon-apple pull-right"/>
        </h1>

        <div className="row">
          <div className="col-sm-3">
            <SubjectBox subject={subject}/>

            <div className="playlist playlist-compact">
              <div className="playlist-item">
                <a href="#">
                  <div className="playlist-item-body">
                    Primero Medio
                  </div>
                </a>
              </div>

              <div className="playlist-item">
                <a href="#">
                  <div className="playlist-item-body">
                    Segundo Medio
                  </div>
                </a>
              </div>

              <div className="playlist-item">
                <a href="#">
                  <div className="playlist-item-body">
                    Tercero Medio
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-9">
            <h2 style={{color: '#6699dd', marginTop: 0}}>Contenidos</h2>
            <hr style={{marginTop: 0, borderColor: '#6699dd'}}/>

            <div className="list-group">
              {subject.units.map((unit, i) =>
                <Link to={`/site/units/${unit.id}`} key={i} className="list-group-item">
                  {unit.name}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
