import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import FieldBox from './FieldBox';

@connect(state => ({
  fields: state.fields
}))
export default class FieldList extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-header">Materias</h1>

        {this.props.fields.map((field, i) =>
          <div className="col-sm-4" key={i}>
            <FieldBox field={field}/>
          </div>
        )}
      </div>
    )
  }
}
