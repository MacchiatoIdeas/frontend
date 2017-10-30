import React from 'react';

import style from './style.less';

const Menu = ({children}) =>
  <div className={style.Menu}>
    {children}
  </div>;

export default Menu;
