import React from 'react';

import style from './GuideItem.less'
import Exercise from '../Exercises/ExerciseDetail/Exercise';

import ClickOutHandler from 'react-onclickout';
import InlineDocument from "../Document/InlineDocument";

export default class GuideItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
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
    console.log("CONTENT", item);
    if (item.type === 'content') {
      return (
        <div>
          <InlineDocument document={item.item}/>
          <hr/>
        </div>
      )
    } else if (item.type === 'exercise') {
      let exercise = {...item.item};

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
    let {item} = this.props;
    return (
      <div ref="li" onClick={this.onClickFocus}>
        <div className={`section text ${style.section}`}>
          <div className={style.options}>
            <span className="btn btn-link drag">
              <span className="glyphicon glyphicon-th"/>
            </span>
            <button className="btn btn-link remove" onClick={() => this.props.removeItem(this.props.index)}>
              <span className="glyphicon glyphicon-remove"/>
            </button>
          </div>
          {this.showItem()}
        </div>
      </div>
    )
  }
}