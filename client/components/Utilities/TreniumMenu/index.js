import React from 'react';

import style from './style.less';

export const active = style.active;

const TreniumMenu = ({children}) =>
  <div className={style.Menu}>
    {children}
  </div>;

export default TreniumMenu;
