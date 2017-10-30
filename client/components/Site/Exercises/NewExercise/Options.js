import React from 'react';

import style from './Options.less';

export default class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      types: [
        {
          'name': "Ejercicio de alternativas",
          "url": "/site/units/" + this.props.unit.id + "/exercises/create/alternatives",
        }, {
          'name': "Ejercicio de términos pareados",
          "url": "/site/units/" + this.props.unit.id + "/exercises/create/matching",
        }
      ]
    }
  }

  render() {
    return (
      <section>
        <h3 className="text-center text-muted">Selecciona un tipo de ejercicio</h3>
        <div className="col-sm-6 col-sm-offset-3">
          <button type="button" className="btn btn-default btn-block" onClick={() => this.selectOption('alternatives')}>
            Nuevo Ejercicio De
            Alternativas
          </button>
          <button type="button" className="btn btn-default btn-block" onClick={() => this.selectOption('matching')}>
            Nuevo Ejercicio De Términos Pareados
          </button>
        </div>
      </section>
    )
  }
}