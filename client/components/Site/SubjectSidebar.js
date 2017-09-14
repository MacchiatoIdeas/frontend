import React from 'react';

export default class SubjectSidebar extends React.Component {
  render() {
    return (
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
    )
  }
}
