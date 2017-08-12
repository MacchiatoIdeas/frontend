import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

@connect(state => ({
  fields: state.fields,
  units: state.units,
  contents: state.contents
}))
export default class Field extends React.Component {
  renderCard(content, i) {
    return (
      <div className="col-sm-6" key={i}>
        <div className="box box-fill">
          <Link to={`/site/contents/${content.id}`}>
            <div className="box-body box-body-min">
              <h2>{content.subtitle}</h2>
              <summary>{content.summary}</summary>
            </div>

            <div style={{position: "relative"}}>
              <div className="backgrounded" style={{backgroundImage: "url('http://images.all-free-download.com/images/graphiclarge/green_blurred_background_200164.jpg')"}}></div>
              <div className="box-footer box-footer-stylized">
                <h3><small>Creado por:</small> {content.author.first_name} {content.author.last_name}</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }

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
            <div className="box" style={{borderBottomColor: "#6699dd"}}>
              <Link to={`/site/field/${field.slug}`}>
                <img src={field.thumbnail} className="box-thumbnail" alt=""/>

                <div className="box-body">
                  <h1>{field.name}</h1>
                </div>
              </Link>
            </div>

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
              {contents.map(this.renderCard)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
