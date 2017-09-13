import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getContentById } from '../../actions/contents';

@connect(state => ({
  fields: state.fields,
  units: state.units,
  contents: state.contents,
  contentIsLoading: state.loadingContent
}), {
  getContentById
})
export default class Content extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContentById(id);
  }

  render() {
    if (this.props.contentIsLoading) {
      return null;
    }

    const {id} = this.props.match.params;
    const content = this.props.contents[parseInt(id)];

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
