import React from 'react';

import style from './ContextMenu.less';
import ClickOutHandler from 'react-onclickout';
import {connect} from 'react-redux';
import {logOutAction} from '../../actions/auth';
import {withRouter} from 'react-router-dom';

@connect(undefined, {
  logOutAction
})
class ContextMenu extends React.Component {
  onLogOutClick() {
    this.props.logOutAction();
    console.log(this.props);
    this.props.history.push('/');
  }

  render() {
    const {show, onHide} = this.props;

    if (!show) {
      return null;
    }

    return (
      <ClickOutHandler onClickOut={onHide}>
        <div className={style.ContextMenu}>
          <div className={style.Item} onClick={this.onLogOutClick.bind(this)}>Cerrar Sesión</div>
        </div>
      </ClickOutHandler>
    )
  }
}

export default withRouter(ContextMenu);
