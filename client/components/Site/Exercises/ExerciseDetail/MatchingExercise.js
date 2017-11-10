import React from 'react';
import style from './MatchingExercise.less';
import MarkdownKatex from "../../Document/MarkdownKatex/index";

export default class MatchingExercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [],
      itemsB: [],
    };
  }

  componentWillMount() {
    let {content} = this.props;
    let answers = [];
    for (let i = 0; i < content.sideB.length; i++) {
      answers.push(i);
    }

    this.setState({
      answers: answers,
      itemsB: content.sideB,
    });

    this.updateAnswer(answers);
  }

  componentDidMount() {
    $(this.refs.list).sortable({
      placeholder: style.placeholder,
      start: function (e, ui) {
        ui.placeholder.height(ui.helper.outerHeight());
        ui.item.startPos = ui.item.index();
      },
      update: (event, ui) => {
        this.updatePosition(ui.item.startPos, ui.item.index())
      },
    });
  }

  updatePosition(start, end) {
    let {answers, itemsB} = this.state;
    let answerElement = answers[start];
    let element = itemsB[start];
    answers.splice(start, 1);
    itemsB.splice(start, 1);
    answers.splice(end, 0, answerElement);
    itemsB.splice(end, 0, element);

    this.setState({
      answers,
      itemsB,
    });
    this.updateAnswer(answers);
  }

  updateAnswer(answer = "") {
    let size = this.props.content.sideA.length;
    let json = {
      schema: 'matching',
      matchs: answer !== "" ? answer.slice(0, size) : this.state.answer.slice(0, size),
    };
    this.props.update(json);
  }

  render() {
    let {content} = this.props;
    return (
      <div>
        <div className="alert alert-info">Ordene la segunda columna para que calce con la primera</div>
        <div className="col-sm-6">
          <div className="playlist playlist-accents">
            <ul className={style.list}>
              {content.sideA.map((alternative, i) => (
                <li key={i} className={style.item}>
                  <div className="alternative">
                    <label className="playlist-item">
                        <span className="playlist-item-body playlist-item-link">
                          <span className="step">
                            {i + 1}
                          </span>
                          <MarkdownKatex markdown={alternative}/>
                        </span>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="playlist playlist-accents">
            <ul ref="list" className={style.list}>
              {content.sideB.map((alternative, i) => (
                <li key={i} className={style.item}>
                  <div className="alternative">
                    <label className="playlist-item">
                        <span className="playlist-item-body playlist-item-link">
                          <span className="step">{i + 1}</span>
                          {alternative}
                        </span>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
