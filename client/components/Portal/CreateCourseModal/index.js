import React from 'react';
import TreniumForm from '../../Utilities/TreniumForm';
import TreniumModal, {icons} from '../../Utilities/TreniumModal';
import {createCourse} from '../../../requests/courses';
import ReactLoading from 'react-loading';

export default class CreateCourseModal extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      isSending: false,
      selectedSubject: null,
    }
  }

  componentWillReceiveProps() {
    this.setState({
      isSending: false,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.setState({isSending: true});

    const name = this.refs.name.value;

    createCourse(name)
      .then(response => {
        this.props.history.push(`/portal/course/${response.id}`);
      });
  }

  render() {
    const {show, onHide} = this.props;

    return (
      <TreniumModal show={show}
                    icon={icons.courses}
                    onHide={onHide}
                    color="#5DDDD3"
                    title="Crear curso">
        <TreniumForm onSubmit={this.onFormSubmit}>
          <label>
            <div>Nombre del curso</div>
            <input type="text" ref="name" placeholder="Nombre de su curso" required/>
          </label>

          {this.state.isSending ?
            <div className="pull-right" style={{paddingTop: 26}}>
              <ReactLoading type="spin" color="#000" width={32}/>
            </div>
            : null
          }

          <button>Continuar</button>
        </TreniumForm>
      </TreniumModal>
    )
  }
}
