import React from 'react';

import style from './AuthBox.less';
import Header from '../Portal/Header/index';

const AuthBox = ({icon, title, color, children}) =>
  <div className={style.AuthBox}>
    <div className={'col-sm-6 col-sm-offset-3'}>
      <div className={style.box}>
        <Header icon={icon} color={color}>{title}</Header>

        <div className={style.form}>
          {children}
        </div>
      </div>
    </div>
  </div>;

export default AuthBox;
