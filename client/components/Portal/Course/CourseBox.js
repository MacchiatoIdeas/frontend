import React from 'react';
import {Link} from 'react-router-dom';

const CourseBox = ({course}) =>
  <div className="playlist-item">
    <Link to={`/portal/course/${course.id}`}>
      <div className="playlist-item-body" style={{paddingLeft: 16}}>
        <strong style={{marginLeft: 0}}>{course.name}</strong>

        <div style={{borderTop: '1px #ccc solid', marginTop: '8px', paddingTop: '8px', color: '#333'}}>
          {course.participants.length} estudiantes
        </div>
      </div>
    </Link>
  </div>;

export default CourseBox;
