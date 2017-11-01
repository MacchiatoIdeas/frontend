import React from 'react';

import style from './style.less';

const HeaderSideButton = ({icon = 'plus-sign', ...props}) =>
  <span className={style.sideButtonBody} {...props}>
    <span className={`glyphicon glyphicon-${icon}`}/>
  </span>;

export default HeaderSideButton;
