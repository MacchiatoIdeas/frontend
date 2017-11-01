import React from 'react';
import TreniumMenu, {active} from '../../Utilities/TreniumMenu/index';
import {NavLink} from 'react-router-dom';

const Menu = ({unitId}) =>
  <TreniumMenu>
    <NavLink exact to={`/site/units/${unitId}/contents`} activeClassName={active}>Documentos</NavLink>
    <NavLink exact to={`/site/units/${unitId}/exercises`} activeClassName={active}>Ejercicios</NavLink>
  </TreniumMenu>;

export default Menu;
