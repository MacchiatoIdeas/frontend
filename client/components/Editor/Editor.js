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
      json: this.props.json !== undefined ? this.props.json : [],
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
    this.updateGraph = this.updateGraph.bind(this);
    this.updateParent = this.updateParent.bind(this);

    this.addTitle = this.addTitle.bind(this);
    this.addContent = this.addContent.bind(this);
    this.addGraph = this.addGraph.bind(this);
    this.addImage = this.addImage.bind(this);

  }

  componentWillMount() {
    console.log(this.state.json);
    let json = this.state.json;
    let inputCount = this.state.inputCount;
    let inputList = this.state.inputList;
    let ret = [];
    for (let item of json) {
      item.key = inputCount;
      switch (item.schema) {
        case 'title':
          ret = this.addTitle(item.title, inputList, inputCount);
          break;

        case 'text':
          ret = this.addContent(item.text, inputList, inputCount);
          break;

        case 'geogebra':
          ret = this.addGraph(item.image, item.editable, inputList, inputCount);
          break;

        case 'image':
          ret = this.addImage(item.url, inputList, inputCount);
          break;
      }
      inputList = ret[0];
      inputCount = ret[1];
    }

    this.setState({
      json,
      inputCount,
      inputList,
    });
    this.updateParent(json);
  }

  addTitle(text = "", inputList, inputCount) {
    let newItem = {
      'key': inputCount,
      'item': <Title text={text} key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}
                     update={(text) => this.updateTitle(text, inputCount)}/>
    };
    return [[...inputList, newItem], inputCount + 1];
  }

  addContent(text = "", inputList, inputCount) {
    let newItem = {
      'key': inputCount,
      'item': <Content text={text} key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}
                       update={(md) => this.updateContent(md, inputCount)}/>
    };
    return [[...inputList, newItem], inputCount + 1];
  }

  addGraph(image = "", editable = "", inputList, inputCount) {
    let newItem = {
      'key': inputCount,
      'item': <Graph image={image} editable={editable} key={inputCount} index={inputCount}
                     remove={(index) => this.removeChild(index)}
                     update={(image, editable) => this.updateGraph(image, editable, inputCount)}/>
    };
    return [[...inputList, newItem], inputCount + 1];
  }

  addImage(url = "", inputList, inputCount) {
    let newItem = {
      'key': inputCount,
      'item': <Image url={url} key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}
                     update={(url) => this.updateImage(url, inputCount)}/>
    };
    return [[...inputList, newItem], inputCount + 1];
  }

  onClickAddTitle(title = "") {
    console.log('Adding Title');
    let inputList = this.state.inputList;
    let json = this.state.json;
    const inputCount = this.state.inputCount;
    let newItem = {
      'key': inputCount,
      'item': <Title title={title} key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}
                     update={(text) => this.updateTitle(text, inputCount)}/>
    };
    let newJson = {
      'key': inputCount,
      'schema': 'title',
      'title': text,
    };
    json = [...json, newJson];
    this.setState({
      inputList: [...inputList, newItem],
      json: json,
      inputCount: inputCount + 1
    });
    this.updateParent(json);

  }

  onClickAddContent(md = "") {
    console.log('Adding Content');
    let inputList = this.state.inputList;
    let json = this.state.json;
    const inputCount = this.state.inputCount;
    let newItem = {
      'key': inputCount,
      'item': <Content text={md} key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}
                       update={(md) => this.updateContent(md, inputCount)}/>
    };
    let newJson = {
      'key': inputCount,
      'schema': 'text',
      'md': md,
    };
    json = [...json, newJson];
    this.setState({
      inputList: [...inputList, newItem],
      json: json,
      inputCount: inputCount + 1
    });
    this.updateParent(json);
  }

  onClickAddGraph(image = "", editable = "") {
    console.log('Adding Graph');
    let inputList = this.state.inputList;
    let json = this.state.json;
    const inputCount = this.state.inputCount;
    let newItem = {
      'key': inputCount,
      'item': <Graph image={image} editable={editable} key={inputCount} index={inputCount}
                     remove={(index) => this.removeChild(index)}
                     update={(image, editable) => this.updateGraph(image, editable, inputCount)}/>
    };
    let newJson = {
      'key': inputCount,
      'schema': 'geogebra',
      'image': image,
      'editable': editable,
    };
    json = [...json, newJson];
    this.setState({
      inputList: [...inputList, newItem],
      json: json,
      inputCount: inputCount + 1
    });
    this.updateParent(json);
  }

  onClickAddImage(url = "") {
    console.log('Adding Image');
    let inputList = this.state.inputList;
    let json = this.state.json;
    const inputCount = this.state.inputCount;
    let newItem = {
      'key': inputCount,
      'item': <Image url={url} key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}
                     update={(url) => this.updateImage(url, inputCount)}/>
    };
    let newJson = {
      'key': inputCount,
      'schema': 'image',
      'url': url,
    };
    json = [...json, newJson];
    this.setState({
      inputList: [...inputList, newItem],
      json: json,
      inputCount: inputCount + 1
    });
    console.log(this.state.inputList);
    this.updateParent(json);
  }

  removeChild(key) {
    console.log('remove', key);
    // getting index
    let inputList = this.state.inputList;
    let json = this.state.json;
    for (let index = 0; index < inputList.length; index++) {
      if (inputList[index].key === key) {
        inputList.splice(index, 1);
        json.splice(index, 1);
        break;
      }
    }
    this.setState({
      inputList: inputList,
      json: json,
    });
    console.log(this.state.inputList);
    this.updateParent(json);
  }

  updatePosition(start, end) {
    let list = this.state.inputList;
    let json = this.state.json;
    let element = list[start];
    let jsonElement = json[start];
    list.splice(start, 1);
    json.splice(start, 1);
    list.splice(end, 0, element);
    json.splice(end, 0, jsonElement);

    this.setState({
      inputList: list,
      json: json,
    });
    console.log(this.state.inputList);
    this.updateParent(json);
  }

  updateContent(text, key) {
    let json = this.state.json;
    for (let index = 0; index < json.length; index++) {
      if (json[index].key === key) {
        json[index].text = text;
      }
    }
    this.setState({
      json: json,
    });
    this.updateParent(json);
  }

  updateTitle(text, key) {
    let json = this.state.json;
    for (let index = 0; index < json.length; index++) {
      if (json[index].key === key) {
        json[index].title = text;
      }
    }
    this.setState({
      json: json,
    });
    this.updateParent(json);
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
    this.updateParent(json);
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
    this.updateParent(json);
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

  updateParent(_json) {
    let json = JSON.parse(JSON.stringify(_json));
    for (let i = 0; i < json.length; i++) {
      delete json[i].key;
    }
    this.props.update(json);
    console.log("UPDATING", json);
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
