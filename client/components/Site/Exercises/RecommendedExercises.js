import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import style from './RecommendedExercises.less';

export default class RecommendedExercises extends React.Component {
  render() {
    let range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <div>
        <div className={`col-sm-12 ${style.recommendedExercises}`}>
          <h2 className="text-center">Ejercicios recomendados</h2>
          <div className={`row row-horizon ${style.wrapper}`}>
            {range.map((item, i) =>
              <div key={i} className={`${style.item}`}>
                <div className="panel panel-default">
                  <div className={style.head}>
                    <span className="glyphicon glyphicon-picture"/>
                  </div>
                  <div className="panel-body">
                    <div className={style.title}/>
                    <div className={style.line}/>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="clearfix"/>
      </div>
    )
  }
}