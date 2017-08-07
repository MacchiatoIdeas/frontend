import React from 'react';
import {Link} from 'react-router';

const Content = React.createClass({
  render() {
    const {id} = this.props.params;

    const content = this.props.contents.find((obj) => obj.id === parseInt(id));
    const subUnit = this.props.subUnits.find((obj) => obj.slug === content.subUnit);

    return (
      <div className="content">
        <h3>{subUnit.name}</h3>

        <p>
          {content.text}
        </p>

        <hr/>

        <strong>Author:</strong> {content.author}
      </div>
    )
  }
});

export default Content;
