import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import FieldBox from './FieldBox';

@connect(state => ({
  fields: state.fields,
  units: state.units
}))
export default class Field extends React.Component {
  renderUnit(unit, i) {
    return (
      <Link to={`/site/units/${unit.id}`} key={i} className="list-group-item">
        {unit.name}
      </Link>
    )
  }

  render() {
    const {id} = this.props.match.params;

    const field = this.props.fields.find((obj) => obj.id == parseInt(id));
    const units = this.props.units.filter((obj) => obj.field == id);

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
              {units.map(this.renderUnit)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
