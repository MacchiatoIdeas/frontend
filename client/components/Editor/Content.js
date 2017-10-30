import React from 'react';
import '../../style/editor.css';

import ClickOutHandler from 'react-onclickout';


export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      markdown: this.props.markdown !== undefined ? this.props.markdown : '',
      render: '',
      editorVisibility: '',
      renderVisibility: 'hidden'
    };

    this.onClickFocus = this.onClickFocus.bind(this);
    this.updateText = this.updateText.bind(this);
    this.onBlur = this.onBlur.bind(this);

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
      appendMarkdown: this.state.markdown
    };
  }

  onClickFocus() {
    console.log('Click!');
    this.setState({
      checked: true,
      renderVisibility: 'hidden',
      editorVisibility: ''
    });
  }

  onBlur() {
    console.log('Blur!');
    console.log(editor);

    let html = this.editor.getHTML();
    if (html === "") {
      html = "<blockquote><span class='lead text-warning'>Elemento vacío</span></blockquote>"
    }

    this.setState({
      checked: false,
      editorVisibility: 'hidden',
      renderVisibility: '',
      render: html
    });
    this.renderKatex();
  }

  renderKatex() {
    // inline
    let children = this.refs.render.querySelectorAll('.tex-inline');
    for (let i = 0, len = children.length; i < len; i++) {
      renderMathInElement(children[i], {
        delimiters: [
          {left: "$$", right: "$$", display: false},
        ]
      });
    }

    // line
    children = this.refs.render.querySelectorAll('.tex-line');
    for (let i = 0, len = children.length; i < len; i++) {
      renderMathInElement(children[i], {
        delimiters: [
          {left: "$$", right: "$$", display: true},
        ]
      });
      console.log('asd');
    }
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
              <div className={this.state.renderVisibility}>
                <div ref="render" className="rendered"
                     dangerouslySetInnerHTML={{__html: this.state.render}}>
                </div>
              </div>
            </div>
          </li>
        </ClickOutHandler>
      </div>
    )
  }
}
