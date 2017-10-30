import React from 'react';

import style from './style.less';

const Header = ({color, icon, children, textColor, sideButton}) =>
  <div className={style.Header} style={{backgroundColor: color}}>
    <img src={icon} className={style.icon}/>
    
    <div className={style.sideButton}>
      {sideButton}
    </div>

    <div className={style.title} style={{color: textColor}}>
      {children}
    </div>
  </div>;

export default Header;
