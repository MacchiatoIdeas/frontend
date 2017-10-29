import React from 'react';

import style from './style.less';
import {Link} from 'react-router-dom';

const Header = ({color, icon, children, textColor, sideButton}) =>
  <div className={style.Header} style={{backgroundColor: color}}>
    <img src={icon} className={style.icon}/>
    
    {sideButton !== undefined ?
      <Link to={sideButton} className={style.sideButton}>
        <span className="glyphicon glyphicon-plus-sign"/>
      </Link>
      : null
    }

    <div className={style.title} style={{color: textColor}}>
      {children}
    </div>
  </div>;

export default Header;
