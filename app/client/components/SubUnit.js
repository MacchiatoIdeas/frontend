import React from 'react';
import {Link} from 'react-router';

export default class Field extends React.Component {
  render() {
    const {slug} = this.props.params;

    const subUnit = this.props.subUnits.find((obj) => obj.slug === slug);
    const unit = this.props.units.find((obj) => obj.slug === subUnit.unit);
    const field = this.props.fields.find((obj) => obj.slug === unit.field);

    const contents = this.props.contents.filter((obj) => obj.subUnit === slug);

    return (
      <div className="sub-unit">
        <h3>
          <small>{field.name}</small><br/>
          <small>{unit.name}</small><br/>
          {subUnit.name}
        </h3>
        <hr/>

        <div className="list-group">
          {contents.map((content, i) => (
            <Link to={`/content/${content.id}`} className="list-group-item" key={i}>{content.author}</Link>
          ))}
        </div>
      </div>
    )
  }
}
