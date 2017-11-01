import React from 'react';
import {Link, NavLink, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getDocumentByIdAction} from '../../../actions/documents';

import Comments from '../Comments/index';

import Header from '../../Utilities/Header/index';

import * as icons from '../../../assets/flaticons';

import BodyLoading from '../../Utilities/BodyLoading/index';
import HeaderSideButton from '../../Utilities/Header/HeaderSideButton';
import DocumentDetail from './DocumentDetail/index';
import DocumentEdit from './DocumentEdit/index';

@connect((state, props) => ({
  document: state.visibleDocument,
  auth: state.auth,
}), {
  getDocumentByIdAction
})
export default class Content extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getDocumentByIdAction(id);
  }

  render() {
    const {auth, document} = this.props;

    if (document.isLoading) {
      return <BodyLoading/>;
    }

    return (
      <div>
        <Switch>
          <Route exact path='/site/contents/:id/edit' render={() =>
            <DocumentEdit document={document} auth={auth}/>
          }/>

          <Route path='/site/contents/:id' render={() =>
            <DocumentDetail document={document} auth={auth}/>
          }/>
        </Switch>
      </div>
    )
  }
}
