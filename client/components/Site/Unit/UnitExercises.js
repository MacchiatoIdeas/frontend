import React from 'react';
import {Link} from 'react-router-dom';

import SubjectBox from '../SubjectBox';
import Box from '../../Box';

import * as icons from '../../../assets/flaticons';
import Header from '../../Portal/Header/index';
import UnitMenu from './UnitMenu';


export default class UnitExercises extends React.Component {
  render() {
    const {unit} = this.props;

    return (
      <div>
        <Header icon={icons.exercises} color="#5DDDD3" sideButton={
          <Link to={`/site/units/${unit.id}/exercises/create`}>
            <span className="glyphicon glyphicon-plus-sign"/>
          </Link>
        }>
          {unit.name}
        </Header>

        <section>
          <div className="col-sm-4">
            <SubjectBox subject={unit.subject} showTitle/>
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
      </div>
    )
  }
}
