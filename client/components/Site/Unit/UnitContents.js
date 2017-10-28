import React from 'react';
import {NavLink} from 'react-router-dom';

import SubjectBox from '../SubjectBox';
import UnitSidebar from './UnitSidebar';
import Box from '../../Box';

export default class UnitContents extends React.Component {
  render() {
    let {filter} = this.props.match.params;
    const {unit} = this.props;

    return (
      <div>
        <section>
          <div className="col-md-4">
            <SubjectBox subject={unit.subject} showTitle={false}/>
            <UnitSidebar type="contents" unit={unit}/>
          </div>

          <div className="col-sm-8">
            <div className="head-link"><span className="glyphicon glyphicon-plus"/> Crear Nuevo Documento</div>
            <h2 className="page-header">Documentos</h2>

            <div className="row">
              <div className="col-sm-12">
                {unit.contents.map((content, i) =>
                  <Box
                    key={content.id}
                    title={content.subtitle}
                    author={content.author}
                    date={'25 de Mayo de 2017'}
                    text={content.summary}
                    comments={0}
                    link={'test'}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
