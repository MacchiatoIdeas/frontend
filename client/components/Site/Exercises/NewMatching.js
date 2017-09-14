import React from 'react';

export default class NewAlternatives extends React.Component {
  constructor(props) {
    super(props);

    this.updateTitle = this.updateTitle.bind(this);
    this.addPair = this.addPair.bind(this);

    this.state = {
      title: "",
      summary: "",
      content: {},
      alternatives: {},
      countAlternatives: 0
    };

    this.alternativeCode = (
      <div className="form-group">
        <div className="input-group">
        <span className="input-group-addon">
          <input type="radio" name="alternative" aria-label="Checkbox for following text input"/>
        </span>
          <input type="text" className="form-control" aria-label="Text input with checkbox"/>
        </div>
      </div>
    );
  }

  updateTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  updateText(event) {
    this.setState({
      text: event.target.value
    });
  }

  updateText(event) {
    this.setState({
      text: event.target.value
    });
  }

  addPair() {
    let alternatives = this.state.alternatives;
    alternatives[this.state.countAlternatives] = this.alternativeCode;
    this.setState({
      alternatives: alternatives,
      countAlternatives: this.state.countAlternatives + 1
    });
  }

  render() {
    console.log('NEW ALTERNATIVES');

    return (
      <div>
        <div className="col-sm-12">
          <div className="form-group">
            <label htmlFor="title">Título:</label>
            <input type="text" className="form-control" id="title" onClick={this.updateTitle}/>
          </div>
          <div className="form-group">
            <label htmlFor="text">Enunciado:</label>
            <input type="text" className="form-control" id="text" onClick={this.updateText}/>
          </div>
          <div className="form-group">
            <label htmlFor="text">Resumen:</label>
            <input type="text" className="form-control" id="summary" onClick={this.updateText}/>
          </div>
          <label>Alternativas:</label>
          {Object.keys(this.state.alternatives).map((key, i) => this.state.alternatives[key])}
          <div className="alert alert-warning">Recuerde seleccionar la alternativa correcta</div>
          <button className="btn btn-default btn-block" onClick={this.addPair}>Agregar opción</button>
          <button className="btn btn-success btn-block" onClick={this.addPair}>Guardar ejercicio</button>
        </div>
      </div>
    )
  }
}
