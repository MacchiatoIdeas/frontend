import React from 'react';
import '../../style/editor.css';
import MarkdownKatex from '../Site/Document/MarkdownKatex/index';

import ClickOutHandler from 'react-onclickout';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      markdown: this.props.text !== undefined ? this.props.text : '',
      editorVisibility: '',
      showRender: false,
    };

    this.onClickFocus = this.onClickFocus.bind(this);
    this.updateText = this.updateText.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.showEditor = this.showEditor.bind(this);

    this.params = {
      path: 'http://static.macchiato.cl/editormd/lib/',
      tex: true,
      autoHeight: true,
      watch: false,
      placeholder: 'Inserte un texto aquí',
      saveHTMLToTextarea: true,
      toolbarAutoFixed: false,
      toolbar: false,
      imageUpload: true,
      imageUploadUrl: 'images/',
      lineNumbers: false,
      styleActiveLine: false,
      autoFocus: false,
      appendMarkdown: this.state.markdown,
      onload: this.showEditor,
    };
  }

  showEditor() {
    this.setState({
      editorVisibility: this.props.text !== undefined ? 'hidden' : '',
      showRender: this.props.text !== undefined,
    });
  }


  onClickFocus() {
    console.log('Click!');
    this.setState({
      checked: true,
      showRender: false,
      editorVisibility: ''
    });
  }

  onBlur() {
    this.setState({
      checked: false,
      editorVisibility: 'hidden',
      showRender: true,
    });
  }

  componentDidMount() {
    console.log('Editor', this.refs.editor.id);
    this.editor = editormd(this.refs.editor.id, this.params);

    let update = this.updateText;
    $('#content' + this.props.index).change(function (e) {
      update(e);
    });
  }

  updateText(event) {
    this.setState({
      markdown: event.target.value
    });
    this.props.update(event.target.value)
  }

  render() {
    return (
      <div>
        <ClickOutHandler onClickOut={this.onBlur}>
          <li ref="li" onClick={this.onClickFocus}>
            <input className="pointer" type="radio" tabIndex="0" name="focus" checked={this.state.checked}/>
            <div className="section text">
              <div className="options">
                <span className="btn btn-link drag">
                  <span className="glyphicon glyphicon-th"/>
                </span>
                <button className="btn btn-link remove" onClick={() => this.props.remove(this.props.index)}>
                  <span className="glyphicon glyphicon-remove"/>
                </button>
              </div>
              <div className={this.state.editorVisibility}>
                <div ref="editor" className="md" id={'editormd' + this.props.index}>
                <textarea ref="content" id={'content' + this.props.index} style={{display: 'none'}}
                          className="section-input"/>
                </div>
              </div>
              <div>
                {this.state.showRender ?
                  <div ref="render" className="rendered">
                    <MarkdownKatex markdown={this.state.markdown}/>
                  </div>
                  : undefined}
              </div>
            </div>
          </li>
        </ClickOutHandler>
      </div>
    )
  }
}
