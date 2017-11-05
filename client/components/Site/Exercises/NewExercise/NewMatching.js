import React from 'react';
import {Form} from '../../../Utilities/TreniumForm/style.less';
import MatchLineA from "./MatchLineA";
import MatchLineB from "./MatchLineB";

export default class NewMatching extends React.Component {
  constructor(props) {
    super(props);

    this.onSideChange = this.onSideChange.bind(this);
    this.updateParent = this.updateParent.bind(this);
    this.setHover = this.setHover.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);

    this.state = {
      sideA: this.props.content !== undefined ? this.props.content.sideA : [''],
      sideB: this.props.content !== undefined ? this.props.content.sideB : [''],
      hover: undefined,
      answer: this.props.answer !== undefined ? this.props.answer.matchs : [],
    };
  }

  onSideChange(_side, index, newValue) {
    let side;
    let answer = this.state.answer;
    if (_side === 'A') side = [...this.state.sideA];
    else side = [...this.state.sideB];
    side[index] = newValue;

    if (index === side.length - 1 && newValue !== '') {
      side.push('');
      if (_side === 'A') answer.push(undefined);
    }

    if (newValue === '') {
      side.splice(index, 1);
      if (_side === 'A') answer.splice(index, 1);
    }

    if (_side === 'A') {
      this.setState({
        sideA: side,
        answer: answer,
      });
      this.updateParent(side, null, answer);
    }
    else {
      this.setState({
        sideB: side,
      });
      this.updateParent(null, side, null);
    }
  }

  setHover(hover) {
    this.setState({
      hover,
    });
  }

  updateAnswer(index, answerIndex) {
    let answer = this.state.answer;
    answer[index] = answerIndex;
    this.setState({
      answer: answer,
    });
    this.updateParent(null, null, answer);
  }

  updateParent(sideA, sideB, correctAnswer) {
    let question = {
      schema: 'matching',
      sideA: sideA !== null ? sideA.slice(0, -1) : this.state.sideA.slice(0, -1),
      sideB: sideB !== null ? sideB.slice(0, -1) : this.state.sideB.slice(0, -1),
    };
    let answer = {
      schema: 'matching',
      matchs: correctAnswer !== null ? correctAnswer : this.state.answer,
    };
    this.props.update(question, answer);
  }

  render() {
    return (
      <div className={Form} style={{paddingLeft: 0, paddingRight: 0}}>
        <label style={{marginBottom: 0}}>
          <div>Términos pareados</div>
        </label>

        <div className="col-sm-6">
          {this.state.sideA.map((item, i) =>
            <MatchLineA key={i} index={i} sideB={this.state.sideB.slice(0, -1)} value={item}
                        selected={this.state.answer[i]}
                        onChange={(index, value) => this.onSideChange('A', index, value)} setHover={this.setHover}
                        updateAnswer={this.updateAnswer}/>)}
        </div>

        <div className="col-sm-6">
          {this.state.sideB.map((item, i) =>
            <MatchLineB key={i} index={i} value={item} hover={this.state.hover === i}
                        onChange={(index, value) => this.onSideChange('B', index, value)}/>)}
        </div>
      </div>
    )
  }
}
