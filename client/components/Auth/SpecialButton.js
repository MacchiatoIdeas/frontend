import React from 'react';
import {Link} from 'react-router-dom';

import style from './SpecialButton.less';

const SpecialButton = ({text, link}) =>
  <div className="pull-right">
    <Link to={link} className={style.createAccount}>{text}</Link>
  </div>;

export default SpecialButton;
