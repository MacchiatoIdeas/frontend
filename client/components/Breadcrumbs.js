import React from 'react';


export default class Breadcrumbs extends React.Component {
  render() {
    return (
      <section>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Materias</a></li>
          <li className="breadcrumb-item active">Matemáticas</li>
        </ol>
      </section>
    )
  }
}
