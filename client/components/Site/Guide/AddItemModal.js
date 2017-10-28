import React from 'React';
import {Modal, ModalTitle, ModalHeader, ModalBody} from 'react-bootstrap';
import style from './AddItemModal.less';
import {connect} from 'react-redux';
import {sendGuideItem} from '../../../actions/guides';
import * as denormalizers from '../../../denormalizers';

const GuideItem = ({title, click, selected}) =>
  <div
    className="playlist-item"
    onClick={click}
    style={{
      transform: selected ? 'scale(1.025, 1.025)' : '',
      transition: '0.25s',
      opacity: selected ? 1 : 0.6
    }}
  >
    <a href="#" className="playlist-item-body playlist-item-link">
      <span className="icon-play-v3 step"/>
      <strong>{title}</strong>
    </a>
  </div>;

@connect((state) => ({
  auth: state.auth,
  guides: denormalizers.guides(state.auth.user.guides, state)
}), {
  sendGuideItem
})
export default class AddItemModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      selectedId: null,
    };

    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.submit = this.submit.bind(this);
  }

  hide() {
    this.setState({
      showModal: false,
      selectedId: null,
    })
  }

  show() {
    this.setState({
      showModal: true,
    })
  }

  onSelect(pk) {
    this.setState({
      selectedId: pk,
    });
  }

  submit() {
    if (this.state.selectedId !== null) {
      if (this.props.content) {
        let pk = this.props.content.id;
        console.log('CONTENT', pk)
      } else if (this.props.exercise) {
        let id = this.props.exercise.id;

        this.props.sendGuideItem(this.props.auth.access_token, {
          guide: this.state.selectedId,
          exercise: id,
          content: null,
          order: Math.floor(Math.random() * 100),
        });
      }
      this.hide();
    }
  }

  render() {
    const {guides} = this.props;
    return (
      <div>
        <button className={`btn btn-block btn-warning ${style.button}`} onClick={this.show}>Agregar a mis guías
        </button>
        <Modal bsSize="large" show={this.state.showModal} onHide={this.hide}>
          <ModalHeader closeButton>
            <ModalTitle id="contained-modal-title">Agregar a mis guías</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <h3 className="text-center text-muted">Selecciona la guía a la cual quieres agregar este elemento</h3>
            <div className="col-sm-12">
              <div className="playlist playlist-accents">
                {guides.map((guide, i) =>
                  <GuideItem title={guide.title} click={() => this.onSelect(guide.id)}
                             selected={guide.id === this.state.selectedPk} key={i}/>
                )}
              </div>
              <br/>
              <button onClick={this.submit} className={`btn btn-success btn-block ${style.submit}`}>Agregar a guía
              </button>
            </div>
            <div className="clearfix"/>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}