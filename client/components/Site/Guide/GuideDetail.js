import React from 'react';

import css from '../../../style/FluidPage.less';
import Exercise from '../Exercises/Exercise';


export default class GuideDetail extends React.Component {
  render() {
    const {guide} = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h2 className="page-header">{guide.title}</h2>
          </div>
        </div>

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
      </div>
    )
  }
}