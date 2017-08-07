import React from 'react';
import {Link} from 'react-router';

const Field = React.createClass({
  render() {
    const {slug} = this.props.params;

    const unit = this.props.units.find((obj) => obj.slug === slug);
    const field = this.props.fields.find((obj) => obj.slug === unit.field);
    const subUnits = this.props.subUnits.filter((obj) => obj.unit === slug);

    return (
      <div className="field">
        <h3>{field.name} > {unit.name}</h3>

        {subUnits.map((subUnit, i) => (
          <div key={i}>
            <Link to={`/sub-unit/${subUnit.slug}`}>{subUnit.name}</Link>
          </div>
        ))}
      </div>
    )
  }
});

export default Field;
