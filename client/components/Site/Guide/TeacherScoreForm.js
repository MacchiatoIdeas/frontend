import React from 'react';
import TreniumForm from '../../Utilities/TreniumForm/index';
import TreniumButton from '../../Utilities/TreniumButton/index';
import {sendTeacherScore} from '../../../requests/exercises';
import TreniumFormLoading from '../../Utilities/TreniumForm/TreniumFormLoading';


class TeacherScoreForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onScoreChange = this.onScoreChange.bind(this);

    this.state = {
      score: Math.round((props.answer.tscore || props.answer.score) * 100),
      isSending: false,
    }
  }

  onScoreChange(e) {
    this.setState({
      score: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({isSending: true});

    const answerId = this.props.answer.id;
    const score = this.state.score;

    sendTeacherScore(answerId, parseInt(score) / 100.0)
      .then((response) => {
        this.setState({isSending: false});
      })
  }

  render() {
    return (
      <TreniumForm onSubmit={this.onSubmit}>
        <label>
          <div>Calificar:</div>
          <input type="text"
                 value={this.state.score}
                 onChange={this.onScoreChange}
                 placeholder="Puntaje"
                 required/>
        </label>

        <TreniumFormLoading isSending={this.state.isSending}/>
        <TreniumButton>Guardar</TreniumButton>
      </TreniumForm>
    )
  }
}

export default TeacherScoreForm;
