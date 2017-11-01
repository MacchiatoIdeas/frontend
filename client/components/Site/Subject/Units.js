import React from 'react';
import {Link} from 'react-router-dom';

const Units = ({units}) =>
  <div className="list-group">
    {units.map((unit, i) =>
      <Link to={`/site/units/${unit.id}`} key={unit.id} className="list-group-item">
        {unit.name}
      </Link>
    )}
  </div>;

export default Units;
