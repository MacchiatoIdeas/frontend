import React from 'react';

import css from '../../../style/FluidPage.less';
import Exercise from '../Exercises/Exercise';
import Header from '../../Portal/Header';

import * as icons from '../../../assets/flaticons';
import {Link} from 'react-router-dom';
import AppuntaModal from '../../Utilities/AppuntaModal/index';

import {Form} from '../../Utilities/Form/style.less';
import Select from '../../Utilities/Select/index';

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
            <div className={`col-sm-9 ${css.content}`}>
              {guide.items.map((item, i) => {
                if (item.type === 'content') {
                  return (
                    <div key={i}>
                      <div dangerouslySetInnerHTML={{__html: item.item.html_text}}/>
                      <hr/>
                    </div>
                  )
                } else if (item.type === 'exercise') {
                  let exercise = {...item.item};
                  exercise.content = JSON.parse(exercise.content);
                  exercise.right_answer = JSON.parse(exercise.right_answer);

                  return (
                    <div key={i}>
                      <h3>Ejercicio Propuesto:</h3>
                      <Exercise exercise={exercise}/>
                      <hr/>
                    </div>
                  )
                }
              })}
            </div>

            <div className={`col-sm-3 ${css.toc}`}>
              <div className="list-group">
                <a href="#" className={`list-group-item ${css.tocItem}`}>
                  <strong>1)</strong> Lorem ipsum dolor sit amet.
                </a>
                <a href="#" className={`list-group-item ${css.tocItem}`}>
                  <strong>2)</strong> Lorem ipsum dolor sit.
                </a>
                <a href="#" className={`list-group-item ${css.tocItem}`}>
                  Lorem ipsum dolor sit amet, consectetur.
                </a>
                <a href="#" className={`list-group-item ${css.tocItem}`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </a>
              </div>
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