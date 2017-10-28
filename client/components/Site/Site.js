import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Body from '../Body';
import Subject from './Subject';
import Content from './Content';
import Subjects from './Subjects';
import Unit from './Unit/Unit';
import Guide from './Guide/Guide';
import {getUserData, loadFromLocalStorage} from '../../actions/auth';
import {connect} from 'react-redux';

@connect(state => {
  const {auth} = state;

  if (auth.isAuthenticated === undefined) {
    return {
      isFetching: true,
    }
  }

  return {
    isFetching: false,
  }
}, {
  getUserData,
  loadFromLocalStorage
})
export default class Site extends React.Component {
  componentWillMount() {
    this.props.loadFromLocalStorage();
  }

  render() {
    const {isFetching} = this.props;

    if (isFetching) {
      return null;
    }

    return (
      <div>
        <Navbar backgroundColor="rgba(255, 255, 255)"/>
        <Body>
          <Switch>
            <Route path="/site/subjects/:id" component={Subject}/>
            <Route path="/site/units/:id" component={Unit}/>
            <Route path="/site/contents/:id" component={Content}/>
            <Route path="/site/guides/:id" component={Guide}/>
            <Route component={Subjects}/>
          </Switch>
        </Body>
      </div>
    )
  }
}
