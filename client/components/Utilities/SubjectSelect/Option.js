import React from 'react';

import style from './Option.less';

const Option = ({title, image, color, selected, onClick}) =>
{
  console.log(selected);

  return (
    <div
      className={`${style.Option} ${selected === undefined ? '' : (selected ? style.selected : style.notSelected)}`}
      onClick={onClick}>

      <img src={image} alt=""/>
      <div className={style.title} style={{borderTopColor: color}}>
        {title}
      </div>
    </div>
  )
};

export default Option;
