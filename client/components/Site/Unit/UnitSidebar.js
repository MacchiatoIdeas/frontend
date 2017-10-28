import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const SidebarLink = ({title, slug, type, unit}) =>
  <div className="playlist-item">
    <Link to={`/site/units/${unit.id}/${type}/${slug}`}>
      <div className="playlist-item-body text-capitalize">
        {title}
      </div>
    </Link>
  </div>;

export default class UnitSidebar extends React.Component {
  render() {
    const {type, unit} = this.props;

    return (
      <div>
        <div className="playlist playlist-compact" style={{marginBottom: '8px'}}>
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
      </div>
    )
  }
}
