import React from 'react';
import {NavLink} from 'react-router-dom';

import SubjectBox from '../SubjectBox';
import DocumentBox from '../DocumentBox';
import UnitSidebar from './UnitSidebar';
import UnitPageTitle from './UnitPageTitle';

export default class UnitContents extends React.Component {
  render() {
    let {filter} = this.props.match.params;
    const {unit} = this.props;

    return (
      <div>
        <div className="col-md-4">
          <SubjectBox subject={unit.subject}/>
          <UnitSidebar type="contents" unit={unit}/>
        </div>

        <div className="col-sm-8">
          <div className="head-link"><span className="glyphicon glyphicon-plus"/> Crear Nuevo Documento</div>
          <UnitPageTitle filter={filter}/>

          <div className="row">
            {unit.contents.map((content, i) =>
              <div className="col-sm-6" key={i}>
                <DocumentBox content={content}/>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
