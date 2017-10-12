import React from 'react';
import PortalSidebar from '../PortalSidebar';
import {Modal, ModalBody, ModalHeader, ModalTitle} from 'react-bootstrap';
import SubjectBox from '../../Site/SubjectBox';
import {connect} from 'react-redux';
import * as denormalizers from '../../../denormalizers';
import NewGuideModal from './NewGuideModal';
import {getAllSubjects} from '../../../actions/subjects';

const GuideItem = ({title, subject, color}) =>
  <div className="playlist-item" style={{borderRightColor: color}}>
    <a href="#" className="playlist-item-body playlist-item-link">
      <span className="icon-play-v3 step" style={{background: color}}/>
      <strong>{title}</strong>
      <div className="playlist-item-tag">{subject}</div>
    </a>
  </div>;


@connect((state) => {
  const {auth} = state;

  return {
    subjects: denormalizers.subjects(state.subjects),
    guides: denormalizers.guides(auth.user.guides, state)
  }
}, {
  getAllSubjects
})
export default class Guides extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  componentWillMount() {
    this.props.getAllSubjects();
  }

  showModal() {
    this.setState({
      showModal: true,
    });
  }

  hideModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const {subjects, guides} = this.props;
    const {showModal} = this.state;

    return (
      <section>
        <div className="col-sm-3">
          <PortalSidebar/>
        </div>

        <div className="col-sm-9">
          <h2 className="page-header">
            <a href="#" className="pull-right" onClick={this.showModal.bind(this)}><i
              className="glyphicon glyphicon-plus"/></a>
            Mis Guías
          </h2>

          <div className="playlist playlist-accents">
            {guides.map((guide, i) =>
              <GuideItem title={guide.title} color="" subject="" key={i}/>
            )}
          </div>
        </div>

        {subjects ?
          <NewGuideModal
            subjects={subjects}
            showModal={showModal}
            hideModalEvent={this.hideModal.bind(this)}/>
          : null
        }

        <div className="clearfix"/>
      </section>
    )
  }
}
