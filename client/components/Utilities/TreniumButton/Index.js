import React from 'react';
import style from './style.less';

const TreniumButton = (props) =>
  <button {...props} className={style.button} style={{backgroundColor: props.backgroundColor}}>
    {props.children}
  </button>;

export default TreniumButton;
