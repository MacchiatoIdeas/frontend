import React from 'react';
import {Link} from 'react-router';

export default class FieldList extends React.Component {
  render() {
    return (
      <div className="photo-grid panel panel-default">
        <div className="list-group">
          {this.props.fields.map((field, i) => (
            <Link to={`/field/${field.slug}`} className="list-group-item" key={i}>
              {field.name}
            </Link>
          ))}
        </div>
      </div>
    )
  }
}
