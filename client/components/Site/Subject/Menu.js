import React from 'react';
import TreniumMenu, {active} from '../../Utilities/TreniumMenu/index';
import {NavLink} from 'react-router-dom';

const Menu = ({subjectId}) =>
  <TreniumMenu>
    <NavLink exact to={`/site/subjects/${subjectId}/units`} activeClassName={active}>Unidades</NavLink>
    <NavLink exact to={`/site/subjects/${subjectId}/guides`} activeClassName={active}>Guías</NavLink>
  </TreniumMenu>;

export default Menu;
