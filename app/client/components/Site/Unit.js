import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import FieldBox from './FieldBox';
import ContentBox from './ContentBox';

@connect(state => ({
  fields: state.fields,
  units: state.units,
  contents: state.contents
}))
export default class Field extends React.Component {
  render() {
    const {id} = this.props.match.params;

    const unit = this.props.units.find((obj) => obj.id === parseInt(id));
    const field = this.props.fields.find((obj) => obj.id === unit.field);

    const contents = Object.keys(this.props.contents).map(key => {
      if (this.props.contents[key].unit.id === parseInt(id)) {
        return this.props.contents[key];
      }
    });

    return (
      <div>
        <h1 className="page-header">
          {unit.name}
          <span className="glyphicon glyphicon-apple pull-right"></span>
        </h1>

        <div className="row">
          <div className="col-sm-3">
            <FieldBox field={field}/>

            <div className="playlist playlist-compact">
              <div className="playlist-item active">
                <a href="#">
                  <div className="playlist-item-body">
                    Trending
                  </div>
                </a>
              </div>

              <div className="playlist-item">
                <a href="#">
                  <div className="playlist-item-body">
                    Más Visitados
                  </div>
                </a>
              </div>

              <div className="playlist-item">
                <a href="#">
                  <div className="playlist-item-body">
                    Recientes
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-9">
            <div className="head-link"><span className="glyphicon glyphicon-plus"></span> Crear Nuevo Documento</div>
            <h2 style={{color: "#6699dd", marginTop: 0}}>Trending</h2>
            <hr style={{marginTop: 0, borderColor: "#6699dd"}}/>

            <div className="row">
              {contents.map((content, i) =>
                <div className="col-sm-6" key={i}>
                  <ContentBox content={content}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
