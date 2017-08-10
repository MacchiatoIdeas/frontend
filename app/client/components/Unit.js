import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

@connect(state => ({
  fields: state.fields,
  units: state.units
}))
export default class Field extends React.Component {
  render() {
    const {slug} = this.props.match.params;

    const unit = this.props.units.find((obj) => obj.slug === slug);
    const field = this.props.fields.find((obj) => obj.slug === unit.field);

    return (
      <div>
        <h1 className="page-header">
          {unit.name}
          <span className="glyphicon glyphicon-apple pull-right"></span>
        </h1>

        <div className="row">
          <div className="col-sm-3">
            <div className="box" style={{borderBottomColor: "#6699dd"}}>
              <Link to={`/field/${field.slug}`}>
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
              <div className="col-sm-6">
                <div className="box box-fill">
                  <a href="#">
                    <div className="box-body box-body-min">
                      <h2>Aprendiendo con Dora</h2>
                      <summary>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis amet incidunt laudantium, vero est dolorum sint. Porro, cum aperiam voluptatum inventore facilis.</summary>
                    </div>

                    <div style={{position: "relative"}}>
                      <div className="backgrounded" style={{backgroundImage: "url('http://images.all-free-download.com/images/graphiclarge/green_blurred_background_200164.jpg')"}}></div>
                      <div className="box-footer box-footer-stylized">
                        <h3><small>Creado por:</small> Francisco Casas</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="box box-fill">
                  <a href="#">
                    <div className="box-body box-body-min">
                      <h2>Aprendiendo con Dora</h2>
                      <summary>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis amet incidunt laudantium, vero est dolorum sint. Porro, cum aperiam voluptatum inventore facilis.</summary>
                    </div>

                    <div style={{position: "relative"}}>
                      <div className="backgrounded"  style={{backgroundImage: "url('http://www.twitrcovers.com/wp-content/uploads/2012/11/Gaussian-Blur-l.jpg')"}}></div>
                      <div className="box-footer box-footer-stylized">
                        <h3><small>Creado por:</small> Francisco Casas</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="box box-fill">
                  <a href="#">
                    <div className="box-body box-body-min">
                      <h2>Aprendiendo con Dora</h2>
                      <summary>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis amet incidunt laudantium, vero est dolorum sint. Porro, cum aperiam voluptatum inventore facilis.</summary>
                    </div>

                    <div style={{position: "relative"}}>
                      <div className="backgrounded" style={{backgroundImage: "url('http://24.media.tumblr.com/fbb9b866b6fae08df0a37b56a82a1f37/tumblr_myqp2kubMm1svrh8zo2_1280.jpg')"}}></div>
                      <div className="box-footer box-footer-stylized">
                        <h3><small>Creado por:</small> Francisco Casas</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
