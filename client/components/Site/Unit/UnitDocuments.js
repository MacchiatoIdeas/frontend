import React from 'react';
import {Link} from 'react-router-dom';

import SubjectBox from '../SubjectBox';
import Box from '../../Box';
import Header from '../../Utilities/Header/index';

import * as icons from '../../../assets/flaticons';
import AppuntaModal from '../../Utilities/AppuntaModal/index';
import Textarea from 'react-textarea-autosize';

import {Form} from '../../Utilities/Form/style.less';
import UnitMenu from './UnitMenu';

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
            <UnitMenu unitId={unit.id}/>

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
