import React from 'react';
import {NavLink} from "react-router-dom";

export default class PortalSidebar extends React.Component {
  render() {
    return (
      <div className="list-group main">
        <NavLink to="/portal" exact className="list-group-item" activeClassName="active">Resumen</NavLink>
        <NavLink to="/portal/folders" exact className="list-group-item" activeClassName="active">Mis Carpetas</NavLink>
        <NavLink to="/portal/guides" exact className="list-group-item" activeClassName="active">Mis Guías</NavLink>
        <NavLink to="/portal/courses" exact className="list-group-item" activeClassName="active">Mis Cursos</NavLink>
        <NavLink to="/portal/exercises" exact className="list-group-item" activeClassName="active">Mis Ejercicios</NavLink>
      </div>
    )
  }
}
