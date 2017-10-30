import React from 'react';
import Box from '../../../Box';
import Student from "../Student/index";

export default class Tests extends React.Component {
  render() {
    const guide = {
      id: 1,
      title: 'Control 1',
      brief: 'Evaluación de ecuaciones de primer grado',
      author: {
        first_name: 'Hernán',
        last_name: 'Herreros',
      }
    };

    return (
      <section>
        <Student image="http://www.fotor.com/images2/features/blur/022.jpg" name="Hernán Herreros"/>
        <Student image="https://resizing.flixster.com/85MN4sgRBqXLc_MaaQLT150IISg=/50x50/v1.YzsyNzMwO2c7MTc0NjA7MTIwMDsxNTA7MTUw" name="Carolina Verdugo"/>
        <Student image="http://s3.crackedcdn.com/phpimages/members/avatars/2/4/467032_45_v13.png" name="Esteban Rodriguez"/>
        <Student image="http://1.gravatar.com/avatar/4baa7b0f8a930f6ff972922583e663e7?s=50&d=mm&r=g" name="Juan Carlos Martines"/>
      </section>
    )
  }
}
