import React from 'react';
import {Link} from 'react-router';

export default class Field extends React.Component {
  render() {
    const {slug} = this.props.params;

    const unit = this.props.units.find((obj) => obj.slug === slug);
    const field = this.props.fields.find((obj) => obj.slug === unit.field);
    const subUnits = this.props.subUnits.filter((obj) => obj.unit === slug);

    return (
      <div className="field">
        <h3>
          <small>{field.name}</small><br/>
          {unit.name}
        </h3>
        <hr/>

        <div className="list-group">
          {subUnits.map((subUnit, i) => (
            <Link to={`/sub-unit/${subUnit.slug}`} className="list-group-item" key={i}>{subUnit.name}</Link>
          ))}
        </div>
      </div>
    )
  }
}
