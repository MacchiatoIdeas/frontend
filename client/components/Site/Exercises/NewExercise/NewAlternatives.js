import React from 'react';

import {Form} from '../../../Utilities/Form/style.less';
import style from './Form.less';
import Textarea from 'react-textarea-autosize';
import Editor from "../../../Editor/Editor";

const Alternative = () => {
  return (
    <div className="form-group">
      <div className="input-group">
        <span className="input-group-addon">
          <input type="radio" name="alternative" aria-label="Checkbox for following text input"/>
        </span>
        <input type="text" className="form-control" aria-label="Text input with checkbox"/>
      </div>
    </div>
  )
};

export default class NewAlternatives extends React.Component {
  constructor(props) {
    super(props);

    this.updateBrief = this.updateBrief.bind(this);
    this.addAlternative = this.addAlternative.bind(this);
    this.updateText = this.updateText.bind(this);

    this.state = {
      brief: "",
      content: {},
      alternatives: [],
      text: [],
    };

  }

  updateBrief(event) {
    this.setState({
      brief: event.target.value
    });
  }

  updateText(json) {
    this.setState({
      text: json
    });
  }

  addAlternative() {
    let alternatives = this.state.alternatives;
    let newAlternative = <Alternative key={this.state.countAlternatives}/>;
    this.setState({
      alternatives: [...alternatives, newAlternative]
    });
  }


  render() {
    return (
      <div>
        <div className="col-sm-12">
          <div className={Form}>
            <label>
              <div>Descripción</div>
              <Textarea onChange={this.updateBrief} ref="experience"
                        placeholder="Aquí escriba una descripción del ejercicio"/>
            </label>
          </div>
          <div className={style.wrapper}>
            <div className={style.text}>Enunciado</div>
            <div className={style.editorContainer}>
              <Editor useTitle={false} update={(json) => this.updateText(json)}/>
            </div>
          </div>
          <div className={style.wrapper}>
            <div className={style.text}>Alternativas</div>
          </div>
        </div>
      </div>
    )
  }
}
