import React from 'react';
import Menu from '../../Utilities/Menu/index';
import {NavLink} from 'react-router-dom';
import {active} from '../../Utilities/Menu/style.less';

const UnitMenu = ({unitId}) =>
  <Menu>
    <NavLink exact to={`/site/units/${unitId}/contents`} activeClassName={active}>Documentos</NavLink>
    <NavLink exact to={`/site/units/${unitId}/exercises`} activeClassName={active}>Ejercicios</NavLink>
  </Menu>;

export default UnitMenu;
