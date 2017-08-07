import React from 'react';
import {Link} from 'react-router';

const FieldList = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.fields.map((field, i) => (
            <div className="field-of-study" key={i}>
              <Link to={`/field/${field.slug}`}>
                {field.name}
              </Link>
            </div>
          ))}
      </div>
    )
  }
});

export default FieldList;
