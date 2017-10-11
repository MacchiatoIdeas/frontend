import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';


import {getGuideById} from '../../../actions/guides';

import css from '../../../style/FluidPage.less';
import GuideDetail from "./GuideDetail";
import GuideEdit from "./GuideEdit";

@connect((state, props) => {
  let guide = state.guides[props.match.params.id];

  if (!guide || !guide.items) {
    return {
      isFetching: true
    }
  }

  return {
    guide
  }
}, {
  getGuideById
})
export default class Guide extends React.Component {
  componentWillMount() {
    this.props.getGuideById(this.props.match.params.id);
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }

    const {guide} = this.props;

    return (
      <div className={`container-fluid ${css.fluidPage}`}>
        <div className="container">
          <Switch>
            <Route path="/site/guides/:id/edit" render={({match}) =>
              <GuideEdit guide={guide} match={match}/>
            }/>
            <Route path="/site/guides/:id" render={({match}) =>
              <GuideDetail guide={guide} match={match}/>
            }/>
          </Switch>
        </div>
      </div>
    )
  }
}
