import React from 'react';
import {Form} from '../../../Utilities/Form/style.less';
import style from './NewCompletion.less'
import Textarea from 'react-textarea-autosize';

export default class NewCompletion extends React.Component {
  constructor(props) {
    super(props);

    this.updateParent = this.updateParent.bind(this);
    this.updateText = this.updateText.bind(this);
    this.formatText = this.formatText.bind(this);
    this.removeWord = this.removeWord.bind(this);
    this.onKeyDownInputword = this.onKeyDownInputword.bind(this);

    this.state = {
      text: "",
      words: [],
    };
  }

  updateParent(text, words) {
    let question = {
      schema: 'completion',
      text: text !== null ? text : this.state.text,
    };
    let answer = {
      schema: 'completion',
      words: words !== null ? words : this.state.words,
    };
    this.props.update(question, answer);
  }

  updateText(ev) {
    this.setState({
      text: ev.target.value,
    });
    this.updateParent(ev.target.value, null);
  }

  formatText() {
    let count = 0, formatted = this.state.text, flag = true;
    while (flag) {
      let val = this.state.words[count] !== undefined ? this.state.words[count] : '';
      formatted = formatted.replace('??', `<input type="text" value="${val}" readonly/>(${count++})`);
      if (formatted.search(/\?\?/g) < 0)
        flag = false;
    }
    return formatted
  }

  removeWord(index) {
    let words = this.state.words;
    words.splice(index, 1);
    this.setState({
      words: words,
    });
    this.updateParent(null, words);
  }

  onKeyDownInputword(ev) {
    if (ev.keyCode === 13) {
      let words = this.state.words;
      words = [...words, ev.target.value];
      this.setState({
        words: words,
      });
      this.refs.inputWord.value = "";
      this.updateParent(null, words);
    }
  }


  render() {
    return (
      <div className={Form} style={{paddingLeft: 0, paddingRight: 0}}>
        <label style={{marginBottom: 0}}>
          <div>Completar la oración</div>
        </label>

        <div className={`alert alert-success ${style.alert}`}>
          Para insertar campos vacíos, escriba <em>??</em>
        </div>
        <label style={{margin: 0, padding: 0, marginBottom: 8}}>
          <div className={`clearfix ${style.wrapper}`}>

            <div className={`col-sm-6 ${style.textarea}`}>
              <Textarea type="text" placeholder="Escriba la oración aquí" value={this.state.text}
                        onChange={this.updateText}/>
            </div>

            <div className={`col-sm-6 ${style.result}`}>
              <div>
                {this.state.text === '' ? <span className="text-muted">El resultado se mostrará acá</span> : ''}
                <div dangerouslySetInnerHTML={{__html: this.formatText()}}/>
              </div>
            </div>
          </div>
        </label>

        <label style={{margin: 0, padding: 0, marginBottom: 8}}>
          <div>Palabras</div>
        </label>
        <div className={`alert alert-success alert ${style.alert}`}>
          Escriba las palabra en orden de aparición
        </div>
        <div className={style.words}>
          {this.state.words.map((word, i) =>
            <span key={i}>{word}
              <button onClick={() => this.removeWord(i)}><span className="glyphicon glyphicon-remove"/></button></span>
          )}
          <input ref="inputWord" onKeyDown={this.onKeyDownInputword} type="text"
                 placeholder="Escriba una palabra aquí"/>
        </div>
      </div>
    )
  }
}