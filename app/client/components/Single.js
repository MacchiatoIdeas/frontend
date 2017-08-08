import React from 'react';

export default class Single extends React.Component {
  render() {
    const { postId } = this.props.params;

    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];

    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
}
