import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1 className="page-header">
          <Link to="/">Appunta</Link>
        </h1>

        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
