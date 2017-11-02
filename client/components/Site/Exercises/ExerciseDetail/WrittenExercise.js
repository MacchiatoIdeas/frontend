import React from 'react';
import Textarea from 'react-textarea-autosize';
import MarkdownKatex from '../../Document/MarkdownKatex';
import style from '../NewExercise/NewCompletion.less';


export default class WrittenExercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      draft: '',
    };
    this.updateAnswer = this.updateAnswer.bind(this);
    this.updateParent = this.updateParent.bind(this);
  }

  updateAnswer(ev) {
    let draft = ev.target.value;
    let json = {
      schema: 'written',
      draft: draft !== '' ? draft : this.state.draft,
    };
    this.props.update(json);
    this.updateParent(draft);
  }

  updateParent(draft) {
    this.setState({
      draft,
    });
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={`clearfix ${style.wrapper}`}>

          <div className={`col-sm-6 ${style.textarea}`}>
              <Textarea type="text" placeholder="Escriba la oración aquí" value={this.state.draft}
                        onChange={this.updateAnswer}/>
          </div>

          <div className={`col-sm-6 ${style.result}`}>
            <div>
              <MarkdownKatex markdown={this.state.draft}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}