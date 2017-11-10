import React from 'react';
import {Link} from 'react-router-dom';

import style from './style.less';

const Units = ({units}) =>
  <div className="list-group">
    {units.map((unit, i) =>
      <Link to={`/site/units/${unit.id}`} key={unit.id} className="list-group-item">
        {unit.name}

        <span className={style.Badge}>
          {unit.nexercises} <span className="glyphicon glyphicon-play" style={{fontSize: 12}}/>
        </span>

        <span className={style.Badge}>
          {unit.ncontents} <span className="glyphicon glyphicon-file" style={{fontSize: 12}}/>
        </span>
      </Link>
    )}
  </div>;

export default Units;
