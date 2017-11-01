import React from 'react';
import {Link} from 'react-router-dom';

import SubjectBox from '../SubjectBox';
import Box from '../../Box';
import Header from '../../Utilities/Header/index';

import * as icons from '../../../assets/flaticons';
import AppuntaModal from '../../Utilities/TreniumModal/index';
import Textarea from 'react-textarea-autosize';

import Menu from './Menu';
import TreniumForm from '../../Utilities/TreniumForm';
import CreateDocumentModal from '../Document/CreateDocumentModal/index';

export default class UnitDocuments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    }
  }

  render() {
    const {unit, history} = this.props;

    return (
      <div>
        <Header icon={icons.document} color="#FF757C" sideButton={
          <Link to="#" onClick={() => this.setState({showModal: true})}>
            <span className="glyphicon glyphicon-plus-sign"/>
          </Link>
        }>{unit.name}</Header>

        <section>
          <div className="col-md-4">
            <SubjectBox subject={unit.subject} showTitle/>
            <br/>
          </div>

          <div className="col-sm-8">
            <Menu unitId={unit.id}/>

            {unit.contents.map((document, i) =>
              <Box
                key={document.id}
                title={document.title}
                author={document.author}
                date={document.moment}
                text={document.summary}
                comments={0}
                link={`/site/contents/${document.id}`}
              />
            )}
          </div>
        </section>

        <CreateDocumentModal show={this.state.showModal}
                             history={history}
                             unitId={unit.id}
                             onHide={() => this.setState({showModal: false})}/>
      </div>
    )
  }
}
