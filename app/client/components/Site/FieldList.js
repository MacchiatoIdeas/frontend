import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAllFields } from '../../actions/fields';
import FieldBox from './FieldBox';

const denormalizeFields = (fields) =>
  Object.keys(fields).map(id => fields[id]);

@connect(state => {
  return {
    fields: denormalizeFields(state.fields)
  }
}, {
  getAllFields
})
export default class FieldList extends React.Component {
  componentDidMount() {
    this.props.getAllFields();
  }

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
