import React from 'react';
import Navbar from '../Navbar';
import '../../style/editor.css';

import Title from './title';
import Content from './content';
import Graph from './graph';


export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputList: [], showModal: false, img: "", };

    this.onClickAddTitle = this.onClickAddTitle.bind(this);
    this.onClickAddContent = this.onClickAddContent.bind(this);
    this.onClickAddGraph = this.onClickAddGraph.bind(this);

  }

  onClickAddTitle(event) {
    console.log('Adding Title');
    const inputList = this.state.inputList;
    this.setState({
      inputList: inputList.concat(<Title key={inputList.length} index={inputList.length}/>)
    });
  }

  onClickAddContent(event) {
    console.log('Adding Content');
    const inputList = this.state.inputList;
    this.setState({
      inputList: inputList.concat(<Content key={inputList.length} index={inputList.length}/>)
    });
  }

  onClickAddGraph(event) {
    console.log('Adding Graph');
    const inputList = this.state.inputList;
    this.setState({
      inputList: inputList.concat(<Graph key={inputList.length} index={inputList.length}/>)
    });
  }


  render() {
    return (
      <div>
        <Navbar/>
        <div className="col-sm-12">
          <div className="paper">
            <ul id="editor" className="editor ui-sortable">
              {this.state.inputList.map((input, i) => input)}
            </ul>
            <div className="col-sm-12">
              <div className="btn-group btn-group-justified">
                <div className="btn group">
                  <button type="button" onClick={this.onClickAddTitle} className="btn btn-default custom red">Añadir título
                  </button>
                </div>
                <div className="btn group">
                  <button type="button" onClick={this.onClickAddContent} className="btn btn-default custom yellow">Añadir
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
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    )
  }
}
