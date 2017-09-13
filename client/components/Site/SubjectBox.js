import React from 'react';
import {Link} from 'react-router-dom';

export default ({ subject }) =>
  <div className="box" style={{borderBottomColor: subject.color}}>
    <Link to={`/site/subjects/${subject.id}`}>
      <img src={subject.thumbnail} className="box-thumbnail" alt={subject.name}/>

      <div className="box-body">
        <h1>{subject.name}</h1>
      </div>
    </Link>
  </div>;
