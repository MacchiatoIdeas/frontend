import React from 'react';
import {Form} from '../../../Utilities/Form/style.less';
import MatchLine from "./MatchLine";

export default class NewMatching extends React.Component {
  constructor(props) {
    super(props);

    this.onSideChange = this.onSideChange.bind(this);
    this.updateParent = this.updateParent.bind(this);

    this.state = {
      sideA: [
        '',
      ],
      sideB: [
        '',
      ],
      answer: [],
    };
  }

  onSideChange(_side, index, newValue) {
    let side;
    if (_side === 'A') side = [...this.state.sideA];
    else side = [...this.state.sideB];
    side[index] = newValue;

    if (index === side.length - 1 && newValue !== '') {
      side.push('');
    }

    if (newValue === '') {
      side.splice(index, 1);
    }

    if (_side === 'A') {
      this.setState({
        sideA: side,
      });
      //this.updateParent(side, null, null);
    }
    else {
      this.setState({
        sideB: side,
      });
      //this.updateParent(null, side, null);
    }
  }

  updateParent(sideA, sideB, correctAnswer) {
    let question = {
      schema: 'matching',
      sideA: sideA !== null ? sideA.slice(0, -1) : this.state.sideA.slice(0, -1),
      sideB: sideB !== null ? sideB.slice(0, -1) : this.state.sideB.slice(0, -1),
    };
    let answer = {
      schema: 'matching',
      answer: correctAnswer !== null ? correctAnswer : this.state.answer,
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
            <MatchLine key={i} index={i} value={item} onChange={(index, value) => this.onSideChange('A', index, value)}/>)}
        </div>

        <div className="col-sm-6">
          {this.state.sideB.map((item, i) =>
            <MatchLine key={i} index={i} value={item} onChange={(index, value) => this.onSideChange('B', index, value)}/>)}
        </div>
      </div>
    )
  }
}
