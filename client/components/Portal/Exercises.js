import React from 'react';
import PortalSidebar from './PortalSidebar';

export default class Exercises extends React.Component {
  render() {
    const exercises = [
      {
        id: 1,
        text: 'lorem ipsum dolor sit amet',
        unit: {
          id: 1,
          name: 'Sistemas de Ecuaciones',
          subject: {
            id: 1,
            name: 'Matemáticas',
            color: '#cc1216',
          }
        }
      }
    ];

    return (
      <section>
        <div className="col-sm-3">
          <PortalSidebar/>
        </div>

        <div className="col-sm-9">
          <h2 className="page-header">Mis Ejercicios</h2>

          <div className="row">
            {exercises.map((exercise, i) =>
              <div className="col-md-6" key={i}>
              </div>
            )}
          </div>
        </div>
        <div className="clearfix"/>
      </section>
    )
  }
}
