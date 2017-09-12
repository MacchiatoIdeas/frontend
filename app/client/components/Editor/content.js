import React from 'react';
import '../../style/editor.css';

import 'editor.md/src/editormd.js';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};

    this.onClickFocus = this.onClickFocus.bind(this);
  }
  onClickFocus(event) {
    console.log('Click!');
    this.setState({
      checked: true
    });
  }

  componentDidMount() {
    console.log("Editor", this.refs.editor.id);
    this.editor = editormd(this.refs.editor.id, {
      path: "../../vendor/editormd/lib/",
      tex: true,
      autoHeight : true,
      watch: false,
      placeholder: "Inserte un texto aquí",
      saveHTMLToTextarea: true,
      toolbarAutoFixed: false,
      toolbar: false,
      imageUpload: true,
      imageUploadUrl: "images/",
      lineNumbers: false,
      styleActiveLine: false,
      autoFocus: false,
    });
    console.log(editormd);

  }

  //renderMarkdown

  render() {
    return (
      <div>
        <li onClick={this.onClickFocus}>
          <input className="pointer" type="radio" name="focus" checked={this.state.checked}/>
          <div className="section text">
            <div className="options">
              <span className="btn btn-link drag"><span className="glyphicon glyphicon-th"/></span>
              <button className="btn btn-link remove"><span className="glyphicon glyphicon-remove"/></button>
            </div>
            <div ref="editor" className="md" id={"editormd" + this.props.index}>
              <textarea style={{display: 'none'}} className="section-input"/>
            </div>
            <div className="rendered hidden">
            </div>
          </div>
        </li>
      </div>
    )
  }
}
