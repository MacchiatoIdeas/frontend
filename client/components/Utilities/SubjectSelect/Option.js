import React from 'react';

import style from './Option.less';

const Option = ({title, image, color, selected, onClick}) =>
  <div
    onClick={onClick}
    className={`${style.Option} ${selected === undefined ? '' : (selected ? style.selected : style.notSelected)}`}>

    <img src={image}/>
    <div className={style.title} style={{borderTopColor: color}}>
      {title}
    </div>
  </div>;

export default Option;
