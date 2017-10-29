import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../../style/editor.css';
import style from './Editor.less';

import Title from './Title';
import Content from './Content';
import Graph from './Graph';
import Body from '../Body';
import * as icons from '../../assets/flaticons';


export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputList: [], showModal: false, img: '', inputCount: 0};

    this.onClickAddTitle = this.onClickAddTitle.bind(this);
    this.onClickAddContent = this.onClickAddContent.bind(this);
    this.onClickAddGraph = this.onClickAddGraph.bind(this);
    this.removeChild = this.removeChild.bind(this);
    this.updatePosition = this.updatePosition.bind(this);

  }

  onClickAddTitle() {
    console.log('Adding Title');
    let inputList = this.state.inputList;
    const inputCount = this.state.inputCount;
    let newItem = {
      'key': inputCount,
      'item': <Title key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}/>
    };
    this.setState({
      inputList: [...inputList, newItem],
      inputCount: inputCount + 1
    });
    console.log(this.state.inputList);

  }

  onClickAddContent() {
    console.log('Adding Content');
    let inputList = this.state.inputList;
    const inputCount = this.state.inputCount;
    let newItem = {
      'key': inputCount,
      'item': <Content key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}/>
    };
    this.setState({
      inputList: [...inputList, newItem],
      inputCount: inputCount + 1
    });
    console.log(this.state.inputList);
  }

  onClickAddGraph() {
    console.log('Adding Graph');
    let inputList = this.state.inputList;
    const inputCount = this.state.inputCount;
    let newItem = {
      'key': inputCount,
      'item': <Graph key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}/>
    };
    this.setState({
      inputList: [...inputList, newItem],
      inputCount: inputCount + 1
    });
    console.log(this.state.inputList);

  }

  removeChild(key) {
    console.log('remove', key);
    // getting index
    let inputList = this.state.inputList;
    for (let index = 0; index < inputList.length; index++) {
      if (inputList[index].key === key) {
        inputList.splice(index, 1);
        break;
      }
    }
    this.setState({
      inputList: inputList
    });
    console.log(this.state.inputList);
  }

  updatePosition(start, end) {
    let list = this.state.inputList;
    let element = list[start];
    list.splice(start, 1);
    list.splice(end, 0, element);

    this.setState({
      inputList: list,
    });
    console.log(this.state.inputList);

  }

  componentDidMount() {
    $('#editor').sortable({
      handle: ".drag",
      placeholder: "ui-state-highlight",
      start: function (e, ui) {
        ui.placeholder.height(ui.helper.outerHeight());
        ui.item.startPos = ui.item.index();
      },
      update: (event, ui) => {
        this.updatePosition(ui.item.startPos, ui.item.index())
      },
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Body showBreadcrumbs={false} showFooter={false}>
        <div className="paper clearfix">
          <ul id="editor" className="editor ui-sortable">
            {this.state.inputList.map((item, i) => item.item)}
          </ul>
        </div>
        <div>
          <div className={style.customBtns}>
            <div className="btn-group btn-group-justified">
              <div className={`btn-group ${style.wrapper} ${style.title}`}>
                <img src={icons.newTitle} alt=""/>
                <button type="button" onClick={this.onClickAddTitle} className={`btn btn-default`}>
                  Añadir título
                </button>
              </div>
              <div className={`btn-group ${style.wrapper} ${style.paragraph}`}>
                <img src={icons.newParagraph} alt=""/>
                <button type="button" onClick={this.onClickAddContent} className={`btn btn-default`}>
                  Añadir Parrafo
                </button>
              </div>
              <div className={`btn-group ${style.wrapper} ${style.graph}`}>
                <img src={icons.newGraph} alt=""/>
                <button type="button" onClick={this.onClickAddGraph} className={`btn btn-default`}>
                  Añadir Gráfico
                </button>
              </div>
              <div className={`btn-group ${style.wrapper} ${style.image}`}>
                <img src={icons.newPicture} alt=""/>
                <button type="button" onClick={this.onClickAddGraph} className={`btn btn-default`}>
                  Añadir Imagen
                </button>
              </div>
            </div>
          </div>
        </div>
        </Body>
      </div>
    )
  }
}
