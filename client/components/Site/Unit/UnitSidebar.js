import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class UnitSidebar extends React.Component {
  render() {
    const {unit} = this.props;

    return (
      <div className="playlist playlist-compact" style={{marginTop: 16}}>
        <div className="playlist-item">
          <NavLink to={`/site/units/${unit.id}/contents`} exact>
            <div className="playlist-item-body">
              Documentos
            </div>
          </NavLink>
        </div>

        <div className="playlist-item">
          <NavLink to={`/site/units/${unit.id}/exercises`} exact>
            <div className="playlist-item-body">
              Ejercicios
            </div>
          </NavLink>
        </div>
      </div>
    )
  }
}
