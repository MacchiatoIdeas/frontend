import React from 'react';

import style from './style.less';
import {NavLink} from 'react-router-dom';

const Menu = ({courseId}) =>
  <div className={style.Menu}>
    <NavLink to={`/portal/courses/${courseId}/guides`} activeClassName={style.active}>Guías</NavLink>
    <NavLink to={`/portal/courses/${courseId}/tests`} activeClassName={style.active}>Controles</NavLink>
  </div>;

export default Menu;
