import React from 'react';

import style from './style.less';

const HeaderSideButton = (props) =>
  <span className={style.sideButtonBody} {...props}>
    <span className="glyphicon glyphicon-plus-sign"/>
  </span>;

export default HeaderSideButton;
