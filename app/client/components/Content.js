import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchContent} from '../actions';

@connect(state => ({
  fields: state.fields,
  units: state.units,
  contents: state.contents,
  contentIsLoading: state.loadingContent
}))
export default class Content extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.dispatch(fetchContent(id));
  }

  render() {
    if (this.props.contentIsLoading) {
      return (
        <div>Loading....</div>
      )
    }

    const {id} = this.props.match.params;

    const content = this.props.contents[parseInt(id)];
    // const unit = this.props.units.find((obj) => obj.slug === content.unit);
    // const field = this.props.fields.find((obj) => obj.slug === unit.field);

    return (
      <div className="content">
        <h2 className="page-header">{content.subtitle}</h2>

        <div className="panel panel-default">
          <div className="panel-body" dangerouslySetInnerHTML={{ __html: content.html_text }}/>

          <div className="panel-footer text-right">
            <strong>Author:</strong> {content.author.first_name} {content.author.last_name}
          </div>
        </div>
      </div>
    )
  }
}
