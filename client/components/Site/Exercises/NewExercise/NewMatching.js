import React from 'react';

const MatchingRow = ({index}) => {
  return (
    <div>
      <div className="col-sm-6">
        <div className="form-group">
          <div className="input-group">
        <span className="input-group-addon">
          <input className="match text-center" type="text" placeholder="Lado B"/>
        </span>
            <input type="text" className="form-control"/>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <div className="input-group">
        <span className="input-group-addon">
          {index}
        </span>
            <input type="text" className="form-control" aria-label="Text input with checkbox"/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default class NewAlternatives extends React.Component {
  constructor(props) {
    super(props);

    this.updateTitle = this.updateTitle.bind(this);
    this.addRow = this.addRow.bind(this);

    this.state = {
      title: "",
      summary: "",
      content: {},
      rows: {},
      countRows: 0
    };
  }

  updateTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  updateText(event) {
    this.setState({
      summary: event.target.value
    });
  }

  addRow() {
    let rows = this.state.rows;
    rows[this.state.countRows] = <MatchingRow key={this.state.countRows} index={this.state.countRows + 1}/>;
    this.setState({
      rows: rows,
      countRows: this.state.countRows + 1
    });
  }

  render() {
    console.log('NEW MATCHING');

    return (
      <div>
        <div>
          <div className="col-sm-6">
            <label>Lado A:</label>
          </div>
          <div className="col-sm-6">
            <label>Lado B:</label>
          </div>

          {Object.keys(this.state.rows).map((key, i) => this.state.rows[key])}
          <div className="clearfix"></div>
        </div>
        <div className="alert alert-warning">Recuerde relacionar los elementos del lado B con el lado A utilizando el
          número de orden.
        </div>
        <button className="btn btn-default btn-block" onClick={this.addRow}>Agregar opción</button>
      </div>
    )
  }
}
