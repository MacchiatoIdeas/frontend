import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Create from "./Create";

export default class Courses extends React.Component {
  render() {
    const courses = [
      {
        id: 1,
        name: '1ro Medio - Champagnat',
        subject: {
          id: 1,
          name: 'Lenguaje',
          color: '#cc1216',
        }
      },
      {
        id: 2,
        name: '2do Medio - Alicante',
        subject: {
          id: 1,
          name: 'Matemáticas',
          color: '#006699',
        }
      }
    ];

    return (
      <Switch>
        <Route exact path="/portal/courses/create" component={Create}/>
      </Switch>
    )
  }
}
