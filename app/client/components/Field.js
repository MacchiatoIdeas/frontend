import React from 'react';
import {Link} from 'react-router';

export default class Field extends React.Component {
  render() {
    const {slug} = this.props.params;

    const field = this.props.fields.find((field) => field.slug === slug);
    const units = this.props.units.filter((unit) => unit.field === slug);

    return (
      <div className="field">
        <h3>{field.name}</h3>

        <hr/>

        <div className="list-group">
          {units.map((unit, i) => (
            <Link to={`/unit/${unit.slug}`} key={i} className="list-group-item">
              {unit.name}
            </Link>
          ))}
        </div>
      </div>
    )
  }
}
