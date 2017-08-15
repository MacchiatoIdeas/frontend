import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFieldById } from '../../actions/fields';

import FieldBox from './FieldBox';

@connect((state, props) => ({
  field: state.fields[props.match.params.id],
  units: state.units,
  isFetching : state.isFetching
}), {
  getFieldById
})
export default class Field extends React.Component {
  loadData() {
    const { id } = this.props.match.params;
    if (!this.props.field || !this.props.field.units) {
      this.props.getFieldById(id, true);
    } else {
      this.props.getFieldById(id);
    }
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { field } = this.props;

    if (!this.props.field || !this.props.field.units) {
      return null;
    }

    const units = field.units.map(id => this.props.units[id]);

    return (
      <div className="field">
        <h1 className="page-header">
          {field.name}
          <span className="glyphicon glyphicon-apple pull-right"></span>
        </h1>

        <div className="row">
          <div className="col-sm-3">
            <FieldBox field={field}/>

            <div className="playlist playlist-compact">
              <div className="playlist-item">
                <a href="#">
                  <div className="playlist-item-body">
                    Primero Medio
                  </div>
                </a>
              </div>

              <div className="playlist-item">
                <a href="#">
                  <div className="playlist-item-body">
                    Segundo Medio
                  </div>
                </a>
              </div>

              <div className="playlist-item">
                <a href="#">
                  <div className="playlist-item-body">
                    Tercero Medio
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-9">
            <h2 style={{color: "#6699dd", marginTop: 0}}>Contenidos</h2>
            <hr style={{marginTop: 0, borderColor: "#6699dd"}}/>

            <div className="list-group">
              {units.map((unit, i) =>
                <Link to={`/site/units/${unit.id}`} key={i} className="list-group-item">
                  {unit.name}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
