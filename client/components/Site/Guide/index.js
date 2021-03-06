import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import {getGuideByIdAction} from '../../../actions/guides';

import GuideDetail from './GuideDetail';
import GuideEdit from './GuideEdit';
import BodyLoading from '../../Utilities/BodyLoading/index';
import GuideDetailForCourse from './GuideDetailForCourse';

@connect((state, props) => ({
  auth: state.auth,
  guide: state.visibleGuide,
}), {
  getGuideByIdAction
})
export default class Guide extends React.Component {
  componentDidMount() {
    this.props.getGuideByIdAction(this.props.match.params.id);
  }

  render() {
    const {guide, auth} = this.props;

    if (guide.isLoading) {
      return <BodyLoading/>;
    }

    return (
      <Switch>
        <Route path="/site/guides/:id/edit" render={({match}) =>
          <GuideEdit guide={guide} match={match}/>
        }/>

        <Route exact path="/site/guides/:id" render={({match}) =>
          <GuideDetail guide={guide} match={match} auth={auth}/>
        }/>

        <Route exact path="/site/guides/:id/course/:courseId" render={({match}) =>
          <GuideDetailForCourse guide={guide} match={match}/>
        }/>
      </Switch>
    )
  }
}
