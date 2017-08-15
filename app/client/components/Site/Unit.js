import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUnitById } from '../../actions/units';

import FieldBox from './FieldBox';
import ContentBox from './ContentBox';

@connect((state, props) => ({
  unit: state.units[props.match.params.id],
  fields: state.fields,
  contents: state.contents
}), {
  getUnitById
})
export default class Field extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    if (!this.props.unit || !this.props.unit.units) {
      this.props.getUnitById(id);
    }
  }

  render() {
    const {id} = this.props.match.params;

    if (!this.props.unit || !this.props.unit.contents) {
      return null;
    }

    const { unit } = this.props;
    const field = this.props.fields[unit.field_of_study];

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
