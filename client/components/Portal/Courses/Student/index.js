import React from 'react';

import style from './style.less';

const Student = ({image, name}) =>
  <a href="#" className={`${style.studentBox}`}>
    <img src={image} className={`${style.studentBoxImg}`} alt="" width={35} height={35}/>
    {name}
  </a>;

export default Student;
