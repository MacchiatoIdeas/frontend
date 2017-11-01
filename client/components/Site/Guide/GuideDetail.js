import React from 'react';

import css from '../../../style/FluidPage.less';
import Exercise from '../Exercises/Exercise';
import Header from '../../Utilities/Header';

import * as icons from '../../../assets/flaticons';
import {Link} from 'react-router-dom';
import AppuntaModal from '../../Utilities/TreniumModal/index';

import {Form} from '../../Utilities/Form/style.less';
import Select from '../../Utilities/Select/index';
import InlineDocument from '../Document/InlineDocument';

export default class GuideDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddModal: false,
    }
  }

  render() {
    const {guide} = this.props;

    return (
      <div>
        <Header color="#efa467" textColor="#fff" icon={icons.guides} sideButton={
          <Link to="#" onClick={() => {this.setState({showAddModal: true})}}>
            <span className="glyphicon glyphicon-plus-sign"/>
          </Link>
        }>{guide.title}</Header>

        <section>
          <div className="row">
            <div className={`col-sm-8 col-sm-offset-2 ${css.content}`}>
              {guide.items.map((item, i) => {
                if (item.type === 'content') {
                  return (
                    <div key={i}>
                      <InlineDocument document={item.item}/>
                      <hr/>
                    </div>
                  );
                } else if (item.type === 'exercise') {
                  return (
                    <div key={i}>
                      <Exercise exercise={item.item}/>
                      <hr/>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </section>

        <AppuntaModal
          show={this.state.showAddModal}
          onHide={() => {this.setState({showAddModal: false})}}
          icon={icons.courses}
          color="#5DDDD3"
          title="Agregar guía a curso">
          <form className={Form}>
            <label>
              <div>Curso</div>

              <Select options={[
                {
                  value: 1,
                  name: 'Primero Medio Champagnat',
                  sideText: 'Matemáticas',
                },
                {
                  value: 2,
                  name: 'Segundo Medio Champagnat',
                  sideText: 'Lenguaje',
                }
              ]}/>
            </label>

            <button>Continuar</button>
          </form>
        </AppuntaModal>
      </div>
    )
  }
}