import React from 'react';

import css from '../../../style/FluidPage.less';
import style from './GuideEdit.less'
import GuideItem from './GuideItem'
import Textarea from 'react-textarea-autosize';
import {connect} from 'react-redux';
import {updateGuide} from '../../../actions/guides';

@connect((state) => ({
  auth: state.auth,
}), {
  updateGuide
})
export default class GuideEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.guide.title,
      brief: this.props.guide.brief,
      items: this.props.guide.items,
      deleted: [],
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBriefChange = this.onBriefChange.bind(this);
    this.submit = this.submit.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onBriefChange(event) {
    this.setState({
      brief: event.target.value,
    });
  }

  updatePosition(start, end) {
    let items =  this.state.items;
    let element = items[start];
    items.splice(start, 1);
    items.splice(end, 0, element);

    this.setState({
      items: items,
    });
    console.log('ITEMS', this.state.items);
  }

  componentDidMount() {
    $('#guide').sortable({
      handle: '.drag',
      placeholder: 'ui-state-highlight',
      start: function (e, ui) {
        ui.placeholder.height(ui.helper.outerHeight());
        ui.item.startPos = ui.item.index();
      },
      update: (event, ui) => {this.updatePosition(ui.item.startPos, ui.item.index())},
    });
  }

  removeChild(index) {
    console.log('remove', index);
    let {items} = this.state;
    let deleted = this.state[index];
    items.splice(index, 1);
    this.setState({
      items: items,
      deleted: [deleted, ...this.state.deleted],
    });
  }

  showWarning() {
    if (this.state.items.length === 0) {
      return <div className="alert alert-warning">Utiliza el buscador de contenidos para agregar elementos a
        tu guía</div>
    }
  }

  submit() {
    const guide = {
      title: this.state.title,
      brief: this.state.brief,
      subject: this.props.guide.subject
    };

    this.props.updateGuide(this.props.auth.access_token, this.props.guide.id, guide);
  }

  render() {
    console.log(this.props.guide);
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h1 className={`page-header ${style.title}`}>
              <div className="col-sm-10"> <input className="pull" value={this.state.title} onChange={this.onTitleChange} placeholder="Inserte título aquí"/></div>
              <div className="col-sm-2"> <button className={`btn btn-warning pull-right ${style.submit}`} onClick={this.submit}>Guardar cambios</button></div>
              <div className="clearfix"/>
            </h1>
            <small className={style.brief}>
              <Textarea value={this.state.brief} onChange={this.onBriefChange} placeholder="Inserte descripción aquí"/>
            </small>
          </div>
        </div>
        <div className="row">
          <div id="guide" className={`col-sm-12 ${css.content}`}>
            {this.state.items.map((item, i) =>
              <GuideItem item={item} key={i} index={i} remove={(index) => this.removeChild(index)}/>
            )}
            {this.showWarning.bind(this)()}
          </div>
        </div>
      </div>
    )
  }
}
