import React from 'react';
import {Link} from 'react-router-dom';

import SubjectBox from '../SubjectBox';
import Box from '../../Box';
import Header from '../../Utilities/Header/index';

import * as icons from '../../../assets/flaticons';
import AppuntaModal from '../../Utilities/TreniumModal/index';
import Textarea from 'react-textarea-autosize';

import {Form} from '../../Utilities/Form/style.less';
import Menu from './Menu';

export default class UnitDocuments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    }
  }

  render() {
    const {unit} = this.props;

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

        <AppuntaModal show={this.state.showModal}
                      onHide={() => this.setState({showModal: false})}
                      title="Crear documento"
                      icon={icons.document}
                      color="#FF757C">
          <form className={Form}>
            <label>
              <div>Nombre</div>
              <input type="text" placeholder="título global del documento"/>
            </label>

            <label>
              <div>Resumen</div>
              <Textarea type="text" placeholder="de qué tratará su documento"/>
            </label>

            <button>Continuar</button>
          </form>
        </AppuntaModal>
      </div>
    )
  }
}
