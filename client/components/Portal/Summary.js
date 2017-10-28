import React from 'react';
import PortalSidebar from './PortalSidebar';

export default class Summary extends React.Component {
  render() {
    return (
      <section>
        <div className="col-sm-12">
          <h2 className="page-header">Recomendaciones</h2>

          <div className="playlist playlist-accents">
            <div className="playlist-item" style={{borderRightColor: '#6699dd'}}>
              <a href="#" className="playlist-item-body playlist-item-link">
                <span className="icon-play-v3 step" style={{background: '#6699dd'}}/>
                <strong>Ecuaciones Diferenciales Ordinarias</strong>
                <div className="playlist-item-tag">Matemáticas</div>
              </a>
            </div>

            <div className="playlist-item" style={{borderRightColor: '#d9534f'}}>
              <div className="playlist-item-body">
                <span className="icon-play-v3 step" style={{background: '#d9534f'}}/>
                <strong>Conectores</strong>
                <div className="playlist-item-tag">Lenguaje</div>
              </div>
            </div>
          </div>

          <hr/>
          <h2 className="page-header">Guías Pendientes</h2>

          <div className="playlist playlist-progress">
            <div className="playlist-item">
              <div className="playlist-item-body">
                <span className="icon-play-v3 step" style={{background: '#5cb85c'}}/>
                <strong>Guía de Ejercicios de Matemáticas</strong>
              </div>

              <div className="progress" style={{margin: 0}}>
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90"
                     aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>
                </div>
              </div>
            </div>

            <div className="playlist-item">
              <div className="playlist-item-body">
                <span className="icon-play-v3 step" style={{background: '#d9534f'}}/>
                <strong>Guía de Ejercicios de Historia</strong>
              </div>

              <div className="progress" style={{margin: 0}}>
                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20"
                     aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
                </div>
              </div>
            </div>

            <div className="playlist-item">
              <div className="playlist-item-body">
                <span className="icon-play-v3 step" style={{background: '#f0ad4e'}}/>
                <strong>Guía de Ejercicios de Lenguaje</strong>
              </div>

              <div className="progress" style={{margin: 0}}>
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                     aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"/>
      </section>
    )
  }
}
