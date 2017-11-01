import React from 'react';
import TreniumModal, {icons} from '../../../Utilities/TreniumModal';
import TreniumForm from '../../../Utilities/TreniumForm';
import Select from '../../../Utilities/Select';
import TreniumButton from '../../../Utilities/TreniumButton';
import TreniumFormLoading from '../../../Utilities/TreniumForm/TreniumFormLoading';
import {addGuideToCourse, getAllOwnCourses} from '../../../../requests/courses';
import BodyLoading from '../../../Utilities/BodyLoading/index';
import showAlert from '../../../Alert';

export default class AddToCourseModal extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      isLoading: true,
      isSending: false,
      courses: [],
      courseId: 0,
    };
  }

  componentWillReceiveProps() {
    this.setState({
      isLoading: true,
      isSending: false,
    });

    getAllOwnCourses()
      .then(response => {
        this.setState({
          isLoading: false,
          courses: response.map(course => ({
            value: course.id,
            name: course.name,
            sideText: '',
          }))
        })
      });
  }

  onFormSubmit(e) {
    e.preventDefault();

    const courseId = this.state.courseId;
    const guideId = this.props.guideId;

    addGuideToCourse(courseId, guideId)
      .then(response => {
        showAlert('Guía añadida con éxito');
        this.props.onHide();
      });
  }

  render() {
    const {show, onHide} = this.props;

    return (
      <TreniumModal
        show={show}
        onHide={onHide}
        icon={icons.courses}
        color="#5DDDD3"
        title="Agregar guía a curso">

        <TreniumForm onSubmit={this.onFormSubmit}>
          <label>
            <div>Curso</div>

            {this.state.isLoading ?
              <BodyLoading padding={16}/>
              :
              <Select options={this.state.courses} onChange={courseId => this.setState({courseId})}/>
            }
          </label>

          <TreniumFormLoading isSending={this.state.isSending}/>

          <TreniumButton>Continuar</TreniumButton>
        </TreniumForm>
      </TreniumModal>
    )
  }
}
