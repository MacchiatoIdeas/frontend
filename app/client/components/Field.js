import React from 'react';
import {Link} from 'react-router';

const Field = React.createClass({
  render() {
    const {slug} = this.props.params;

    const field = this.props.fields.find((field) => field.slug === slug);
    const units = this.props.units.filter((unit) => unit.field === slug);

    return (
      <div className="field">
        <h3>{field.name}</h3>
        {units.map((unit, i) => (
          <div className="field-item" key={i}>
            <Link to={`/unit/${unit.slug}`}>{unit.name}</Link>
          </div>
        ))}
      </div>
    )
  }
});

export default Field;
