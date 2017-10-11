import React from 'react';

import css from '../../../style/FluidPage.less';
import style from './GuideEdit.less'
import Exercise from '../Exercises/Exercise';
import GuideItem from './GuideItem'
import ClickOutHandler from 'react-onclickout';

import Reorder, {reorder, reorderImmutable, reorderFromTo, reorderFromToImmutable} from 'react-reorder';

export default class GuideEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.guide.title,
      items:
      this.props.guide.items
    }

    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  componentDidMount() {
    $('#guide').sortable({
      handle: ".drag",
      placeholder: "ui-state-highlight",
      start: function (e, ui) {
        ui.placeholder.height(ui.helper.outerHeight());
      },
    });
  }

  removeChild(index) {
    console.log('remove', index);
    const {items} = this.state;
    items.splice(index, 1);
    this.setState({
      items: items
    });
  }

  showWarning() {
    if (this.state.items.length === 0) {
      return <div className="alert alert-warning">Utiliza el buscador de contenidos para agregar elementos a
        tu guía</div>
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h1 className={`page-header ${style.title}`}><input value={this.state.title} onChange={this.onTitleChange}
                                                                placeholder="Inserte título aquí"/></h1>
          </div>
        </div>
        <div className="row">
          <div id="guide" className={`col-sm-12 ${css.content}`}>
            {this.state.items.map((item, i) => <GuideItem item={item} key={i} index={i}
                                                          remove={(index) => this.removeChild(index)}/>)}
            {this.showWarning.bind(this)()}
          </div>
        </div>
      </div>
    )
  }
}
