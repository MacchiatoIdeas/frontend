import React from 'react';
import Option from './Option';

export default class SubjectSelect extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);

    this.state = {};
  }

  onSelect(subject) {
    const {onChange} = this.props;

    this.setState({
      selected: subject,
    });

    onChange(subject);
  }

  render() {
    const {subjects} = this.props;
    const {selected} = this.state;

    return (
      <div className="row" style={{paddingLeft: 14, paddingRight: 14}}>
        {subjects.map((subject, i) =>
          <div className="col-sm-4" key={subject.id} style={{margin: 0, padding: 1}}>

            <Option
              selected={selected === undefined ? undefined : this.state.selected.id === subject.id}
              onClick={() => this.onSelect(subject)}
              title={subject.name}
              image={subject.thumbnail}
              color={subject.color}/>
          </div>
        )}
      </div>
    )
  }
}