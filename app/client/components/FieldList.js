import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

@connect(state => ({
  fields: state.fields
}))
export default class FieldList extends React.Component {
  renderField(field, i) {
    return (
      <div className="col-sm-4" key={i}>
        <div className="box" style={{borderBottomColor: field.color}}>
          <Link to={`/fields/${field.slug}`}>
            <img src={field.thumbnail} className="box-thumbnail" alt=""/>

            <div className="box-body">
              <h1>{field.name}</h1>
            </div>
          </Link>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1 className="page-header">Materias</h1>

        <div className="page">
          {this.props.fields.map(this.renderField)}
        </div>
      </div>
    )
  }
}
