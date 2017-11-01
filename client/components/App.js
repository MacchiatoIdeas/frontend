import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import Login from './Auth/Login/Login';
import Portal from './Portal/Portal';
import Site from './Site/Site';
import Editor from './Editor/Editor';
import Register from './Auth/Register/index';
import {loadFromLocalStorage} from '../actions/auth';
import {connect} from 'react-redux';
import Loading from './Utilities/Loading/index';
import {getAllSubjectsAction} from '../actions/subjects';

@connect(state => ({
  auth: state.auth,
}), {
  loadFromLocalStorage,
  getAllSubjectsAction
})
export default class App extends React.Component {
  componentWillMount() {
    this.props.loadFromLocalStorage();
    this.props.getAllSubjectsAction();
  }

  render() {
    const {auth} = this.props;

    if (auth.isLoading) {
      return <Loading/>
    }

    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/portal"/>
          <Route path="/portal" component={Portal}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/site" component={Site}/>
          <Route path="/editor" component={Editor}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
