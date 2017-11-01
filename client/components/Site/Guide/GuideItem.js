import React from 'react';

import style from './GuideItem.less'
import Exercise from '../Exercises/ExerciseDetail/Exercise';

import ClickOutHandler from 'react-onclickout';

export default class GuideItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    }
    this.onBlur = this.onBlur.bind(this);
    this.onClickFocus = this.onClickFocus.bind(this);
    this.showItem = this.showItem.bind(this)
  }

  onBlur() {
    this.setState({
      checked: false,
    });
  }

  onClickFocus() {
    this.setState({
      checked: true,
    });
  }

  showItem() {
    const {item} = this.props;
    if (item.type === 'content') {
      return (
        <div>
          <div dangerouslySetInnerHTML={{__html: item.item.html_text}}/>
          <hr/>
        </div>
      )
    } else if (item.type === 'exercise') {
      let exercise = {...item.item};
      exercise.content = JSON.parse(exercise.content);
      exercise.right_answer = JSON.parse(exercise.right_answer);

      return (
        <div>
          <h3>Ejercicio Propuesto:</h3>
          <Exercise exercise={exercise}/>
          <hr/>
        </div>
      )
    }
  }

  render() {
    return (
      <div ref="li" onClick={this.onClickFocus}>
        <div className={`section text ${style.section}`}>
          <div className={style.options}>
            <span className="btn btn-link drag">
              <span className="glyphicon glyphicon-th"/>
            </span>
            <button className="btn btn-link remove" onClick={() => this.props.remove(this.props.index)}>
              <span className="glyphicon glyphicon-remove"/>
            </button>
          </div>
          {this.showItem()}
        </div>
      </div>
    )
  }
}