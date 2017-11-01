import React from 'react';

import style from './style.less';

const Student = ({image, name, onClick}) =>
  <div onClick={onClick} className={`${style.StudentBox}`}>
    <img src={image} className={`${style.studentBoxImg}`} alt="" width={35} height={35}/>
    {name}
  </div>;

export default Student;
