import React from 'react';
import {NavLink} from 'react-router-dom';

import css from './PortalSidebar.less';

export default class PortalSidebar extends React.Component {
  render() {
    return (
      <div className={`list-group ${css.navbar}`}>
        <NavLink to="/portal" exact className={`list-group-item ${css.navbarItem}`} activeClassName="active">Resumen</NavLink>
        <NavLink to="/portal/guides" exact className={`list-group-item ${css.navbarItem}`} activeClassName="active">Mis Guías</NavLink>
        <NavLink to="/portal/courses" exact className={`list-group-item ${css.navbarItem}`} activeClassName="active">Mis Cursos</NavLink>
      </div>
    )
  }
}
