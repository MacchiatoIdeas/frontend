import React from 'react';
import ReactLoading from 'react-loading';

import style from './style.less';

const Loading = ({color = '#fff'}) =>
  <div className={style.Loading}>
    <ReactLoading type="bars" color={color}/>
  </div>;

export default Loading;
