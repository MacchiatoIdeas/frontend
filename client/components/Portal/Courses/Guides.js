import React from 'react';
import GuideBox from '../../Site/GuideBox';

export default class Guides extends React.Component {
  render() {
    const guide = {
      id: 1,
      title: 'Guía de Curso',
      brief: 'Guía de Curso',
      author: {
        first_name: 'Marcelo',
        last_name: 'Jara',
      }
    };

    return (
      <div>
        <h2 className="page-header">Guías</h2>

        <div className="row">
          <div className="col-sm-6">
            <GuideBox guide={guide}/>
          </div>
        </div>
      </div>
    )
  }
}
