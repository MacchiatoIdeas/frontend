import React from 'react';
import Student from './Student';
import style from './style.less';

export default class Students extends React.Component {
  render() {
    let {students, limit, onStudentClick} = this.props;

    const images = [
      'http://www.fotor.com/images2/features/blur/022.jpg',
      'https://resizing.flixster.com/85MN4sgRBqXLc_MaaQLT150IISg=/50x50/v1.YzsyNzMwO2c7MTc0NjA7MTIwMDsxNTA7MTUw',
      'http://s3.crackedcdn.com/phpimages/members/avatars/2/4/467032_45_v13.png',
      'http://1.gravatar.com/avatar/4baa7b0f8a930f6ff972922583e663e7?s=50&d=mm&r=g'
    ];

    if (limit !== undefined) {
      students = students.slice(0, limit);
    }

    return (
      <div>
        {(students.length === 0) && (limit === undefined) ?
          <div className={style.Jumbo}>
            <h1>Su curso no estudiantes.</h1>

            <h2>Puede agregar estudiantes presionando <span className="glyphicon glyphicon-plus"/>
              {' '}
              al costado de esta página</h2>
          </div>
          : null
        }

        {students.map((student, i) =>
          <Student image={images[i % images.length]}
                   onClick={() => onStudentClick(student)}
                   name={`${student.user.first_name} ${student.user.last_name}`}
                   key={student.id}/>
        )}
      </div>
    )
  }
}
