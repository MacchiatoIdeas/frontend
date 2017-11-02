import React from 'react';

export default class NewWritten extends React.Component {
  constructor(props) {
    super(props);

    this.props.update({
      schema: 'written',
    });
  }
  render() {
    return null
  }
}
