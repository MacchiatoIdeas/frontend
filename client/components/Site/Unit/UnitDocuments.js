import React from 'react';

import SubjectBox from '../SubjectBox';
import UnitSidebar from './UnitSidebar';
import Box from '../../Box';
import Header from '../../Portal/Header/index';

import * as icons from '../../../assets/flaticons';

export default class UnitDocuments extends React.Component {
  render() {
    const {unit} = this.props;

    return (
      <div>
        <Header icon={icons.document} color="#FF757C">{unit.name}</Header>

        <section>
          <div className="col-md-4">
            <SubjectBox subject={unit.subject} showTitle/>
            <UnitSidebar type="contents" unit={unit}/>
          </div>

          <div className="col-sm-8">
            <div className="head-link"><span className="glyphicon glyphicon-plus"/> Crear Documento</div>
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
                    link={`/site/contents/${content.id}`}
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
