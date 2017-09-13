import React from 'react';
import {Link} from 'react-router-dom';

const FieldBox = ({ field }) =>
  <div className="box" style={{borderBottomColor: field.color}}>
    <Link to={`/site/fields/${field.id}`}>
      <img src={field.thumbnail} className="box-thumbnail" alt=""/>

      <div className="box-body">
        <h1>{field.name}</h1>
      </div>
    </Link>
  </div>;

export default FieldBox;
