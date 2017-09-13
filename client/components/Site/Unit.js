import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUnitById } from '../../actions/units';
import { getFieldById } from '../../actions/fields';

import FieldBox from './FieldBox';
import ContentBox from './ContentBox';

@connect((state, props) => {
  const { id } = props.match.params;

  let unit = state.units[id];
  if (!unit) {
    return { isFetching: true };
  }

  let contents = unit.contents;
  if (!contents) {
    return { isFetching: true, unit };
  }
  contents = unit.contents.map(id => state.contents[id]);
  contents = contents.map(content => ({...content, author: state.authors[content.author]}));

  let field = state.fields[unit.field_of_study];
  if (!field) {
    return { isFetching: true, unit, contents };
  }

  return {
    isFetching: false,
    unit,
    contents,
    field,
  }
}, {
  getUnitById,
  getFieldById,
})
export default class Field extends React.Component {
  loadData() {
    const { id } = this.props.match.params;

    if (!this.props.unit || !this.props.contents) {
      this.props.getUnitById(id);
      return;
    }

    if (!this.props.field) {
      this.props.getFieldById(this.props.unit.field_of_study);
    }
  }

  render() {
    if (this.props.isFetching) {
      this.loadData();
      return null;
    }

    const { unit, contents, field } = this.props;

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
