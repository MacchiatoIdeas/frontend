import React from 'react';

import css from '../../../style/FluidPage.less';
import style from './GuideEdit.less'
import GuideItem from './GuideItem'
import Textarea from 'react-textarea-autosize';
import {connect} from 'react-redux';
import {updateGuide, updateGuideAction} from '../../../actions/guides';
import Header from '../../Utilities/Header/index';
import * as icons from '../../../assets/flaticons';
import HeaderSideButton from '../../Utilities/Header/HeaderSideButton';
import showAlert from "../../Alert";
import {deleteItemFromGuide, updateGuideItem} from "../../../requests/guides";

@connect((state) => ({
  auth: state.auth,
}), {
  updateGuideAction
})
export default class GuideEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.guide.title,
      brief: this.props.guide.brief,
      jsxItems:[],
      items: this.props.guide.items,
      deleted: [],
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBriefChange = this.onBriefChange.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  componentWillMount() {
    let {guide} = this.props;
    let jsxItems = [];
    for (let i = 0; i < guide.items.length; i++) {
      jsxItems.push(<GuideItem item={guide.items[i]} key={i} index={i} removeItem={() => this.removeChild(i)}/>)
    }
    this.setState({
      jsxItems,
    });
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
    console.log(start, end);
    let {items, jsxItems} = this.state;
    items.splice(end, 0, items.splice(start, 1)[0]);
    jsxItems.splice(end, 0, jsxItems.splice(start, 1)[0]);
    this.setState({
      items,
      jsxItems,
    });
  }

  componentDidMount() {
    $('#guide').sortable({
      handle: '.drag',
      placeholder: style.sortablePlaceholder,
      start: function (e, ui) {
        ui.placeholder.height(ui.helper.outerHeight());
        ui.item.startPos = ui.item.index();
      },
      update: (event, ui) => {
        this.updatePosition(ui.item.startPos, ui.item.index())
      },
    });
  }

  removeChild(index) {
    let {items} = this.state;
    let deleted = items[index].id;
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

  onSaveClick() {
    const title = this.state.title;
    const brief = this.state.brief;
    const subject = this.props.guide.subject;

    this.props.updateGuideAction(this.props.guide.id, subject.id, title, brief)
      .then(response => {
        showAlert('Guía guardada con éxito.');
      });

    this.state.deleted.map(item => deleteItemFromGuide(item)
      .then(response => {
        showAlert('Elemento eliminado de la guía.');
      }));

    this.state.items.map((item, order) => {
      let exercise = null;
      let content = null;

      if (item.type === 'content') {
        content = item.item.id;
      } else {
        exercise = item.item.id;
      }

      updateGuideItem(item.id, this.props.guide.id, content, exercise, order)
        .then(response => {
          console.log(response);
        });
    })
  }

  render() {
    let {jsxItems} = this.state;
    return (
      <div>
        <Header icon={icons.guidesv2} color="#FFCA4F" sideButton={
          <HeaderSideButton onClick={this.onSaveClick} icon="floppy-disk"/>
        }>
          {this.state.title}
        </Header>
        <section>
          <div className="row">
            <div className="col-sm-12">
              <h1 className={`page-header clearfix ${style.title}`}>
                <div className="col-sm-10"><input className="pull" value={this.state.title}
                                                  onChange={this.onTitleChange} placeholder="Inserte título aquí"/>
                </div>
              </h1>
              <p className={style.brief}>
                <Textarea value={this.state.brief} onChange={this.onBriefChange}
                          placeholder="Inserte descripción aquí"/>
              </p>
            </div>
          </div>
          <div className="row">
            <ul id="guide" className={`col-sm-12 ${css.content}`}>
                {jsxItems.map((item, i) => item)}
              {this.showWarning.bind(this)()}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
