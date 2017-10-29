import React from 'react';
import ReactLoading from 'react-loading';

import style from './style.less';

const Loading = () =>
  <div className={style.Loading}>
    <ReactLoading type="bars" color="#fff"/>
  </div>;

export default Loading;
