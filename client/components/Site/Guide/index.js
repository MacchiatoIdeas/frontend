import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';


import {getGuideByIdAction} from '../../../actions/guides';

import GuideDetail from './GuideDetail';
import GuideEdit from './GuideEdit';
import BodyLoading from '../../Utilities/BodyLoading/index';

@connect((state, props) => ({
  guide: state.visibleGuide,
}), {
  getGuideByIdAction
})
export default class Guide extends React.Component {
  componentDidMount() {
    this.props.getGuideByIdAction(this.props.match.params.id);
  }

  render() {
    const {guide} = this.props;

    if (guide.isLoading) {
      return <BodyLoading/>;
    }

    return (
      <Switch>
        <Route path="/site/guides/:id/edit" render={({match}) =>
          <GuideEdit guide={guide} match={match}/>
        }/>

        <Route path="/site/guides/:id" render={({match}) =>
          <GuideDetail guide={guide} match={match}/>
        }/>
      </Switch>
    )
  }
}
