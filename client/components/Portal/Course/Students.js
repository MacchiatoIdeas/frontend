import React from 'react';
import Student from './Student/index';
import style from './style.less';

export default class Students extends React.Component {
  render() {
    let {students, limit, onStudentClick} = this.props;

    if (limit !== undefined) {
      students = students.slice(0, limit);
    }

    return (
      <div>
        {(students.length === 0) && (limit === undefined) ?
          <div className={style.Jumbo}>
            <h1>Su curso no tiene estudiantes.</h1>

            <h2>Puede agregar estudiantes presionando <span className="glyphicon glyphicon-plus"/>
              {' '}
              al costado de esta página</h2>
          </div>
          : null
        }
        {students.map((student, i) =>
          <Student image={`https://sigil.cupcake.io/${student.user.email}`}
                   onClick={() => onStudentClick(student)}
                   name={`${student.user.first_name} ${student.user.last_name}`}
                   key={student.id}/>
        )}
      </div>
    )
  }
}
