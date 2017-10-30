import React from 'react';

import Navbar from '../Navbar/Navbar';
import Body from '../Body';
import Title from './Title';
import Content from './Content';
import Graph from './Graph';
import Image from './Image';

import '../../style/editor.css';
import style from './Editor.less';
import * as icons from '../../assets/flaticons';


export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputList: [],
      json: [],
      showModal: false,
      img: '',
      inputCount: 0
    };

    this.onClickAddTitle = this.onClickAddTitle.bind(this);
    this.onClickAddContent = this.onClickAddContent.bind(this);
    this.onClickAddGraph = this.onClickAddGraph.bind(this);
    this.onClickAddImage = this.onClickAddImage.bind(this);
    this.removeChild = this.removeChild.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updateGraph = this.updateContent.bind(this);

  }

  onClickAddTitle(text = "") {
    console.log('Adding Title');
    let inputList = this.state.inputList;
    let json = this.state.json;
    const inputCount = this.state.inputCount;
    let newItem = {
      'key': inputCount,
      'item': <Title key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}
                     update={(text) => this.updateTitle(text, inputCount)}/>
    };
    let newJson = {
      'key': inputCount,
      'text': text,
    };
    this.setState({
      inputList: [...inputList, newItem],
      json: [...json, newJson],
      inputCount: inputCount + 1
    });
    console.log(this.state.inputList);

  }

  onClickAddContent(md = "") {
    console.log('Adding Content');
    let inputList = this.state.inputList;
    let json = this.state.json;
    const inputCount = this.state.inputCount;
    let newItem = {
      'key': inputCount,
      'item': <Content key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}
                       update={(md) => this.updateContent(md, inputCount)}/>
    };
    let newJson = {
      'key': inputCount,
      'md': md,
    };
    this.setState({
      inputList: [...inputList, newItem],
      json: [...json, newJson],
      inputCount: inputCount + 1
    });
    console.log(this.state.inputList);
  }

  onClickAddGraph(image = "", editable = "") {
    console.log('Adding Graph');
    let inputList = this.state.inputList;
    let json = this.state.json;
    const inputCount = this.state.inputCount;
    let newItem = {
      'key': inputCount,
      'item': <Graph key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}
                     update={(image, editable) => this.updateGraph(image, editable, inputCount)}/>
    };
    let newJson = {
      'key': inputCount,
      'image': image,
      'editable': editable,
    };
    this.setState({
      inputList: [...inputList, newItem],
      json: [...json, newJson],
      inputCount: inputCount + 1
    });
    console.log(this.state.inputList);

  }

  onClickAddImage(url = "") {
    console.log('Adding Image');
    let inputList = this.state.inputList;
    let json = this.state.json;
    const inputCount = this.state.inputCount;
    let newItem = {
      'key': inputCount,
      'item': <Image key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}
                     update={(url) => this.updateImage(url, inputCount)}/>
    };
    let newJson = {
      'key': inputCount,
      'url': url,
    };
    this.setState({
      inputList: [...inputList, newItem],
      json: [...json, newJson],
      inputCount: inputCount + 1
    });
    console.log(this.state.inputList);

  }

  removeChild(key) {
    console.log('remove', key);
    // getting index
    let inputList = this.state.inputList;
    let json = this.state.json;
    for (let index = 0; index < inputList.length; index++) {
      if (inputList[index].key === key) {
        inputList.splice(index, 1);
        json.splicre(index, 1);
        break;
      }
    }
    this.setState({
      inputList: inputList,
      json: json,
    });
    console.log(this.state.inputList);
  }

  updatePosition(start, end) {
    let list = this.state.inputList;
    let json = this.state.json;
    let element = list[start];
    list.splice(start, 1);
    json.splice(start, 1);
    list.splice(end, 0, element);
    json.splice(end, 0, element);

    this.setState({
      inputList: list,
      json: json,
    });
    console.log(this.state.inputList);

  }

  updateContent(md, key) {
    let json = this.state.json;
    for (let index = 0; index < json.length; index++) {
      if (json[index].key === key) {
        json[index].md = md;
      }
    }
    this.setState({
      json: json,
    });
  }

  updateTitle(text, key) {
    let json = this.state.json;
    for (let index = 0; index < json.length; index++) {
      if (json[index].key === key) {
        json[index].text = text;
      }
    }
    this.setState({
      json: json,
    });
  }

  updateImage(url, key) {
    let json = this.state.json;
    for (let index = 0; index < json.length; index++) {
      if (json[index].key === key) {
        json[index].url = url;
      }
    }
    this.setState({
      json: json,
    });
  }

  updateGraph(image, editable, key) {
    let json = this.state.json;
    for (let index = 0; index < json.length; index++) {
      if (json[index].key === key) {
        json[index].image = image;
        json[index].editable = editable;
      }
    }
    this.setState({
      json: json,
    });
  }

  componentDidMount() {
    $('#editor').sortable({
      handle: ".drag",
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

  render() {
    let useTitle = this.props.useTitle !== undefined ? this.props.useTitle : true;
    return (
      <div>
        <div>
          <div className={style.customBtns}>
            <div className="btn-group btn-group-justified">
              {useTitle ?
                <div className={`btn-group ${style.wrapper} ${style.title}`}>
                  <img src={icons.newTitle} alt=""/>
                  <button type="button" onClick={() => this.onClickAddTitle()} className={`btn btn-default`}>
                    Añadir título
                  </button>
                </div>
                : undefined}
              <div className={`btn-group ${style.wrapper} ${style.paragraph}`}>
                <img src={icons.newParagraph} alt=""/>
                <button type="button" onClick={() => this.onClickAddContent()} className={`btn btn-default`}>
                  Añadir Parrafo
                </button>
              </div>
              <div className={`btn-group ${style.wrapper} ${style.graph}`}>
                <img src={icons.newGraph} alt=""/>
                <button type="button" onClick={() => this.onClickAddGraph()} className={`btn btn-default`}>
                  Añadir Gráfico
                </button>
              </div>
              <div className={`btn-group ${style.wrapper} ${style.image}`}>
                <img src={icons.newImage} alt=""/>
                <button type="button" onClick={() => this.onClickAddImage()} className={`btn btn-default`}>
                  Añadir Imagen
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="paper clearfix">
          <ul id="editor" className="editor ui-sortable">
            {this.state.inputList.map((item, i) => item.item)}
            {this.state.inputList.length === 0 ?
              <h3 className="text-muted text-center">Utiliza los botones para agregar elementos</h3>
              : undefined}
          </ul>
        </div>
      </div>
    )
  }
}
