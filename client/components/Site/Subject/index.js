import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {getSubjectByIdAction} from '../../../actions/subjects';

import SubjectBox from '../SubjectBox';
import Sidebar from './Sidebar';
import Header from '../../Utilities/Header';

import * as icons from '../../../assets/flaticons';
import Menu from './Menu';
import Units from './Units';
import Guides from './Guides';
import Redirect from 'react-router-dom/es/Redirect';
import TreniumModal from '../../Utilities/TreniumModal/index';

import Textarea from 'react-textarea-autosize';

import HeaderSideButton from '../../Utilities/Header/HeaderSideButton';
import {createGuideAction} from '../../../actions/guides';
import {createGuide} from '../../../requests';
import TreniumForm from "../../Utilities/TreniumForm/index";

@connect((state, props) => ({
  auth: state.auth,
  subject: state.visibleSubject,
}), {
  getSubjectByIdAction,
  createGuideAction,
})
export default class Subject extends React.Component {
  constructor(props) {
    super(props);

    this.onModalSubmit = this.onModalSubmit.bind(this);

    this.state = {
      showModal: false,
      brief: '',
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getSubjectByIdAction(id);
  }

  onModalSubmit(e) {
    e.preventDefault();

    const title = this.refs.title.value;
    const brief = this.state.brief;
    const _public = this.refs.visibility.checked;

    createGuide(this.props.subject.id, title, brief, !_public)
      .then(response => {
        this.props.history.push(`/site/guides/${response.id}/edit`);
      });
  }

  render() {
    const {auth, subject} = this.props;

    if (subject.isLoading) {
      return null;
    }

    return (
      <div>
        <Header icon={icons.subject} color="#FFCA4F" sideButton={
          auth.data.user_type === 'teacher' ?
            <Switch>
              <Route path={`/site/subjects/${subject.id}/guides`} render={() =>
                <HeaderSideButton onClick={() => this.setState({showModal: true})}/>
              }/>
            </Switch>
            : null
        }>{subject.name}</Header>

        <section>
          <div className="col-md-4">
            <SubjectBox subject={subject} showTitle/>
            <Sidebar/>
          </div>

          <div className="col-md-8">
            <Menu subjectId={subject.id}/>

            <Switch>
              <Route path={`/site/subjects/${subject.id}/units`} render={() => <Units units={subject.units}/>}/>
              <Route path={`/site/subjects/${subject.id}/guides`} render={() => <Guides guides={subject.guides}/>}/>
              <Redirect from={`/site/subjects/${subject.id}`} to={`/site/subjects/${subject.id}/units`}/>
            </Switch>
          </div>
          <div className="clearfix"/>
        </section>

        <TreniumModal show={this.state.showModal}
                      onHide={() => this.setState({showModal: false})}
                      icon={icons.guidesv2}
                      title="Crear guía"
                      color="#FFCA4F">
          <TreniumForm onSubmit={this.onModalSubmit}>
            <label>
              <div>Título</div>
              <input type="text" ref="title" placeholder="Nombre de su guía" required/>
            </label>

            <label>
              <div>Descripción</div>
              <Textarea onChange={(e) => this.setState({brief: e.target.value})} placeholder="Descripción corta de su guía"/>
            </label>

            <label>
              <div><input type="checkbox" ref="visibility" defaultChecked/> Pública</div>
            </label>

            <button>Continuar</button>
          </TreniumForm>
        </TreniumModal>
      </div>
    )
  }
}
