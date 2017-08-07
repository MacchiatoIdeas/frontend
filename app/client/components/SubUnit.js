import React from 'react';
import {Link} from 'react-router';

const Field = React.createClass({
  render() {
    const {slug} = this.props.params;

    const subUnit = this.props.subUnits.find((obj) => obj.slug === slug);
    const contents = this.props.contents.filter((obj) => obj.subUnit === slug);

    return (
      <div className="sub-unit">
        <h3>{subUnit.name}</h3>

        {contents.map((content, i) => (
          <div className="content" key={i}>
            <Link to={`/content/${content.id}`}>{content.author}</Link>
          </div>
        ))}
      </div>
    )
  }
});

export default Field;
