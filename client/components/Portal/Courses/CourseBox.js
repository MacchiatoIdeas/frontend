import React from 'react';
import {Link} from 'react-router-dom';

const CourseBox = ({course}) =>
  <div className="playlist-item" style={{borderRightColor: course.subject.color}}>
    <Link to={`/portal/courses/${course.id}`}>
      <div className="playlist-item-body">
        <span className="glyphicon glyphicon-apple step" style={{background: course.subject.color}}/>

        <div style={{marginLeft: '16px'}}>
          <strong style={{marginLeft: 0}}>{course.name}</strong>
          <div className="playlist-item-tag hidden-xs">{course.subject.name}</div>

          <div style={{borderTop: '1px #ccc solid', marginTop: '8px', paddingTop: '8px', color: '#333'}}>
          <span className="hidden-xs hidden-sm">
            12 estudiantes, 6 controles, 4 guías
          </span>

            <div className="pull-right">
              <div className="badge" style={{backgroundColor: '#cc1216'}}>8</div>
              {' '}
              nuevas respuestas
            </div>
            <div className="clearfix"/>
          </div>
        </div>
      </div>
    </Link>
  </div>;

export default CourseBox;
