import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

@connect(state => ({
  fields: state.fields,
  units: state.units
}))
export default class Field extends React.Component {
  renderUnit(unit, i) {
    return (
      <Link to={`/unit/${unit.slug}`} key={i} className="list-group-item">
        {unit.name}
      </Link>
    )
  }

  render() {
    const {slug} = this.props.match.params;

    const field = this.props.fields.find((field) => field.slug === slug);
    const units = this.props.units.filter((unit) => unit.field === slug);

    return (
      <div className="field">
        <h1 className="page-header">
          {field.name}
          <span className="glyphicon glyphicon-apple pull-right"></span>
        </h1>

        <div className="row">
          <div className="col-sm-3">
            <div className="box" style={{borderBottomColor: field.color}}>
              <Link to={`/field/${field.slug}`}>
                <img src={field.thumbnail} className="box-thumbnail" alt=""/>

                <div className="box-body">
                  <h1>{field.name}</h1>
                </div>
              </Link>
            </div>

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

            <hr/>
            <div>
              <h2 style={{color: "#d9534f", marginTop: 0}}>Guías</h2>
            </div>
            <hr style={{marginTop: 0, borderColor: "#d9534f"}}/>

            <div className="list-group">
              <a href="#" className="list-group-item">Guía de Trigonometría</a>
              <a href="#" className="list-group-item">Guía de Fracciones</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
