import React from 'react';
import {Link} from 'react-router-dom';

import style from './Select.less';

const OptionButton = ({icon, text, link}) => (
  <Link to={link} className={style.OptionBtn}>
    <div>
      <div className={style.icon}>
        <i className={`glyphicon glyphicon-${icon}`}/>
      </div>

      {text}
    </div>
  </Link>
);

const Select = ({}) =>
  <div className={style.Select}>
    <div className="row">
      <div className="col-sm-6">
        <OptionButton text="Estudiante" icon="education" link="/register/student"/>
      </div>
      <div className="col-sm-6">
        <OptionButton text="Profesor" icon="blackboard" link="/register/teacher"/>
      </div>
    </div>
  </div>;

export default Select;
