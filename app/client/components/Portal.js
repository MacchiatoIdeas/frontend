import React from 'react';
import {Route} from 'react-router';

import Summary from './Summary';

export default class Portal2 extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Summary}/>
      </div>
    )
  }
}
