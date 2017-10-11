import React from 'react';
import PortalSidebar from '../PortalSidebar';


const GuideItem = ({title, subject, color}) =>
  <div className="playlist-item" style={{borderRightColor: color}}>
    <a href="#" className="playlist-item-body playlist-item-link">
      <span className="icon-play-v3 step" style={{background: color}}/>
      <strong>{title}</strong>
      <div className="playlist-item-tag">{subject}</div>
    </a>
  </div>;


export default class Guides extends React.Component {
  render() {
    return (
      <section>
        <div className="col-sm-3">
          <PortalSidebar/>
        </div>

        <div className="col-sm-9">
          <h2 className="page-header">Mis Guías</h2>

          <div className="playlist playlist-accents">
            <GuideItem title="Guía de Biología" color="#5cb85c" subject="Biología"/>
            <GuideItem title="Guía de Lenguaje" color="#d9534f" subject="Lenguaje"/>
            <GuideItem title="Guía de Inglés" color="#f0ad4e" subject="Inglés"/>
          </div>
        </div>

        <div className="clearfix"/>
      </section>
    )
  }
}
