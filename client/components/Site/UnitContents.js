import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import SubjectBox from './SubjectBox';
import ContentBox from './ContentBox';
import UnitSidebar from './UnitSidebar';
import UnitPageTitle from './UnitPageTitle';

export default class UnitContents extends React.Component {
  render() {
    let {filter} = this.props.match.params;
    const {unit} = this.props;

    return (
      <div>
        <div className="col-sm-3">
          <SubjectBox subject={unit.subject}/>

          <div className="playlist playlist-compact" style={{marginBottom: '8px'}}>
            <div className="playlist-item">
              <NavLink to={`/site/units/${unit.id}/contents`} exact>
                <div className="playlist-item-body">
                  Contenido
                </div>
              </NavLink>
            </div>

            <div className="playlist-item">
              <NavLink to={`/site/units/${unit.id}/exercises`} exact>
                <div className="playlist-item-body">
                  Ejercicios
                </div>
              </NavLink>
            </div>
          </div>

          <UnitSidebar type="contents" unit={unit}/>
        </div>

        <div className="col-sm-9">
          <div className="head-link"><span className="glyphicon glyphicon-plus"/> Crear Nuevo Documento</div>
          <UnitPageTitle filter={filter}/>

          <div className="row">
            {unit.contents.map((content, i) =>
              <div className="col-sm-6" key={i}>
                <ContentBox content={content}/>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
