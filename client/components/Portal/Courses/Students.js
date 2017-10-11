import React from 'react';

import css from './Course.less';

const Student = ({image, name}) =>
  <a href="#" className={`${css.studentBox}`}>
      <img src={image} className={`${css.studentBoxImg}`} alt="" width={35} height={35}/>
      {name}
  </a>;

export default class Students extends React.Component {
  render() {
    return (
      <div>
        <h2 className="page-header">Estudiantes</h2>

        <Student image="http://www.fotor.com/images2/features/blur/022.jpg" name="Hernán Herreros" />
        <Student image="https://resizing.flixster.com/85MN4sgRBqXLc_MaaQLT150IISg=/50x50/v1.YzsyNzMwO2c7MTc0NjA7MTIwMDsxNTA7MTUw" name="Carolina Verdugo" />
        <Student image="http://s3.crackedcdn.com/phpimages/members/avatars/2/4/467032_45_v13.png" name="Esteban Rodriguez" />
        <Student image="http://1.gravatar.com/avatar/4baa7b0f8a930f6ff972922583e663e7?s=50&d=mm&r=g" name="Juan Carlos Martines" />
      </div>
    )
  }
}
