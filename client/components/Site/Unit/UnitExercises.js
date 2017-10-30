import React from 'react';
import {Link} from 'react-router-dom';

import SubjectBox from '../SubjectBox';
import Box from '../../Box';

import * as icons from '../../../assets/flaticons';
import Header from '../../Portal/Header/index';
import UnitMenu from './UnitMenu';
import AppuntaModal from '../../Utilities/AppuntaModal/index';

import style from './style.less';
import {Form} from '../../Utilities/Form/style.less';

export default class UnitExercises extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    }
  }

  render() {
    const {unit} = this.props;

    const types = [
      {
        'name': 'Alternativas',
        'url': '/site/units/' + this.props.unit.id + '/exercises/create/alternatives',
        'icon': icons.newAlternatives,
        'class': style.alternatives,
      }, {
        'name': 'Términos pareados',
        'url': '/site/units/' + this.props.unit.id + '/exercises/create/matching',
        'icon': icons.newMatching,
        'class': style.matching,
      }, {
        'name': 'Completar la oración',
        'url': '/site/units/' + this.props.unit.id + '/exercises/create/complete',
        'icon': icons.newComplete,
        'class': style.complete,
      }
    ];

    return (
      <div>
        <Header icon={icons.exercises} color="#5DDDD3" sideButton={
          <Link to="#" onClick={() => this.setState({showModal: true})}>
            <span className="glyphicon glyphicon-plus-sign"/>
          </Link>
        }>
          {unit.name}
        </Header>

        <section>
          <div className="col-sm-4">
            <SubjectBox subject={unit.subject} showTitle/>
            <br/>
          </div>

          <div className="col-sm-8">
            <UnitMenu unitId={unit.id}/>

            <div className="row">
              <div className="col-sm-12">
                {unit.exercises.map((exercise, i) =>
                  <Box
                    key={exercise.id}
                    title={''}
                    author={exercise.author}
                    date={'25 de Mayo de 2017'}
                    text={exercise.briefing}
                    comments={0}
                    link={`/site/units/${unit.id}/exercise/${exercise.id}`}
                    linkText='Ver Ejercicio'
                    stars={4}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <AppuntaModal show={this.state.showModal}
                      title="Nuevo ejercicio"
                      onHide={() => this.setState({showModal: false})}
                      icon={icons.exercises}
                      color="#5DDDD3">
          <div className={Form} style={{paddingBottom: 0}}>
            {types.map((item, key) =>
              <Link key={key} to={item.url} className={`${style.item} ${item.class} clearfix`}>
                <img src={item.icon} alt=""/>
                <span>{item.name}</span>
              </Link>
            )}
          </div>
        </AppuntaModal>
      </div>
    )
  }
}
