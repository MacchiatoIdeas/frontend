import React from 'react';
import {Link} from 'react-router-dom';

import style from './style.less';

const Units = ({units, level}) =>
  <div className="list-group">
    {units.map((unit, i) =>
      (level !== undefined && unit.academic_level === level) || level === undefined ?
        <Link to={`/site/units/${unit.id}`} key={unit.id} className="list-group-item">
          {unit.name}

          <span className={style.Badge}>
          {unit.nexercises} <span className="glyphicon glyphicon-play" style={{fontSize: 12}}/>
        </span>

          <span className={style.Badge}>
          {unit.ncontents} <span className="glyphicon glyphicon-file" style={{fontSize: 12}}/>
        </span>
        </Link>
        : null
    )}
  </div>;

export default Units;
