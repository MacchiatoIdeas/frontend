import React from 'react';
import {NavLink} from 'react-router-dom';

import style from './Course.less';

const SidebarLink = ({to, text}) =>
  <NavLink to={to} exact className={`list-group-item ${style.navbarItem}`} activeClassName="active">{text}</NavLink>;


const Sidebar = ({id}) => (
  <div className={`list-group ${style.navbar}`}>
    <SidebarLink to={`/portal/course/${id}`} text="Resumen" />
    <SidebarLink to={`/portal/course/${id}/students`} text="Estudiantes" />
    <SidebarLink to={`/portal/course/${id}/guides`} text="Guías" />
    <SidebarLink to={`/portal/course/${id}/tests`} text="Controles" />
  </div>
);

export default Sidebar;
