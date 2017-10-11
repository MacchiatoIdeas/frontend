import React from 'react';
import Navbar from '../Navbar';
import '../../style/editor.css';

import Title from './Title';
import Content from './Content';
import Graph from './Graph';
import Body from '../Body';


export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputList: {}, showModal: false, img: '', inputCount: 0};

    this.onClickAddTitle = this.onClickAddTitle.bind(this);
    this.onClickAddContent = this.onClickAddContent.bind(this);
    this.onClickAddGraph = this.onClickAddGraph.bind(this);
    this.removeChild = this.removeChild.bind(this);

  }

  onClickAddTitle() {
    console.log('Adding Title');
    let inputList = this.state.inputList;
    const inputCount = this.state.inputCount;
    inputList[inputCount] = <Title key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}/>;
    this.setState({
      inputList: inputList,
      inputCount: inputCount + 1
    });
  }

  onClickAddContent() {
    console.log('Adding Content');
    let inputList = this.state.inputList;
    const inputCount = this.state.inputCount;
    inputList[inputCount] = <Content key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}/>;
    this.setState({
      inputList: inputList,
      inputCount: inputCount + 1
    });
    console.log(this.state.inputList);
  }

  onClickAddGraph() {
    console.log('Adding Graph');
    let inputList = this.state.inputList;
    const inputCount = this.state.inputCount;
    inputList[inputCount] = <Graph key={inputCount} index={inputCount} remove={(index) => this.removeChild(index)}/>;
    this.setState({
      inputList: inputList,
      inputCount: inputCount + 1
    });
  }

  removeChild(index) {
    console.log('remove', index);
    const inputList = this.state.inputList;
    delete inputList[index];
    this.setState({
      inputList: inputList
    });
  }

  componentDidMount() {
    $('#editor').sortable({
      handle: ".drag",
      placeholder: "ui-state-highlight"
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Body showBreadcrumbs={false} showFooter={false}>
          <div className="paper">
            <ul id="editor" className="editor ui-sortable">
              {Object.keys(this.state.inputList).map((key, i) => this.state.inputList[key])}
            </ul>
            <div className="col-sm-12">
              <div className="btn-group btn-group-justified main-options">
                <div className="btn group">
                  <button type="button" onClick={this.onClickAddTitle} className="btn btn-default custom red">Añadir
                    título
                  </button>
                </div>
                <div className="btn group">
                  <button type="button" onClick={this.onClickAddContent} className="btn btn-default custom yellow">
                    Añadir
                    Parrafo
                  </button>
                </div>
                <div className="btn group">
                  <button type="button" onClick={this.onClickAddGraph} className="btn btn-default custom green">Añadir
                    Gráfico
                  </button>
                </div>
              </div>
            </div>
            <div className="clearfix"/>
          </div>
        </Body>
      </div>
    )
  }
}
