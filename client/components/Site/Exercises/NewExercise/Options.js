import React from 'react';
import {Link} from 'react-router-dom';

import style from './Options.less';
import * as icons from '../../../../assets/flaticons';

export default class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      types: [
        {
          'name': "Alternativas",
          "url": "/site/units/" + this.props.unit.id + "/exercises/create/alternatives",
          "icon": icons.newAlternatives,
          "class": style.alternatives,
        }, {
          'name': "Términos pareados",
          "url": "/site/units/" + this.props.unit.id + "/exercises/create/matching",
          "icon": icons.newMatching,
          "class": style.matching,
        }, {
          'name': "Completar la oración",
          "url": "/site/units/" + this.props.unit.id + "/exercises/create/complete",
          "icon": icons.newComplete,
          "class": style.complete,
        }
      ]
    }
  }

  render() {
    return (
      <section>
        <h3 className="text-center text-muted">Selecciona un tipo de ejercicio</h3>
        <div className="col-sm-12 text-center">
          {this.state.types.map((item, key) =>
            <div className="col-sm-4">
              <Link key={key} to={item.url} className={`${style.item} ${item.class} clearfix`}>
                  <img src={item.icon} alt=""/>
                  <span>{item.name}</span>
              </Link>
            </div>
          )}
        </div>
      </section>
    )
  }
}