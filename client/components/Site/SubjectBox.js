import React from 'react';
import {Link} from 'react-router-dom';

export default ({subject}) =>
  <div>
    <div id="image-subject-wrapper">
      <Link to={`/site/subjects/${subject.id}`}>
        <img src={subject.thumbnail} className="box-thumbnail" alt={subject.name}/>
      </Link>
    </div>
    <br/>
  </div>;
