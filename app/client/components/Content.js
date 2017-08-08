import React from 'react';
import {Link} from 'react-router';

export default class Content extends React.Component {
  render() {
    const {id} = this.props.params;

    const content = this.props.contents.find((obj) => obj.id === parseInt(id));
    const subUnit = this.props.subUnits.find((obj) => obj.slug === content.subUnit);
    const unit = this.props.units.find((obj) => obj.slug === subUnit.unit);
    const field = this.props.fields.find((obj) => obj.slug === unit.field);

    return (
      <div className="content">
        <h3>
          <small>{field.name}</small><br/>
          <small>{unit.name}</small><br/>
          {subUnit.name}
        </h3>

        <hr/>

        <div className="panel panel-default">
          <div className="panel-body">
            {content.text}
          </div>

          <div className="panel-footer text-right">
            <strong>Author:</strong> {content.author}
          </div>
        </div>
      </div>
    )
  }
}
