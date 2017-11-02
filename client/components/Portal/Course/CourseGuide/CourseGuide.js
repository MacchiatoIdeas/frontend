import React from 'react';
import {connect} from 'react-redux';
import {getGuideByIdAction} from '../../../../actions/guides';
import BodyLoading from '../../../Utilities/BodyLoading/index';

@connect(state => ({
  guide: state.visibleGuide
}), {
  getGuideByIdAction
})
export default class CourseGuide extends React.Component {
  componentDidMount() {
    const {guideId} = this.props.match.params;
    console.log(this.props.match);
    this.props.getGuideByIdAction(guideId);
  }

  render() {
    const {guide, course, auth} = this.props;

    if (guide.isLoading) {
      return <BodyLoading/>;
    }

    return (
      <div>
        {guide.items.map((item, i) => {
          if (item.type === 'content') {
            return (
              <div key={i}>
                <InlineDocument document={item.item}/>
                <hr/>
              </div>
            );
          } else if (item.type === 'exercise') {
            console.log(item.item);
            return (
              <div key={i}>
                <Exercise exercise={item.item} autoCorrect/>
                <hr/>
              </div>
            )
          }
        })}
      </div>
    )
  }
}
