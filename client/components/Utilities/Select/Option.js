import React from 'react';

import style from './style.less';

const Option = ({value, checked, children, onClick}) =>
  <div className={`row ${style.Option} ${checked ? style.active : ''}`} onClick={() => onClick(value)}>
    <div className="col-sm-1">
      {checked ? <span className="glyphicon glyphicon-ok-circle"/> : <span className={style.emptyCircle}/>}
    </div>

    <div className="col-sm-11">
      {children}
    </div>
  </div>;

export default Option;
