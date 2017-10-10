import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import style from './CommentDetail.less'
import Comment from "./Comments";

export default class CommentDetail extends React.Component {
  render() {
    let comment = this.props.comment;
    return (
      <div>
        <div className={style.commentWrapper}>
          <div className="col-sm-2">
            <div className={`text-center ${style.profile}`}>
              <img src={comment.user.profilePicture} alt={comment.user.name} className="rounded-circle"/>
              <h4>{comment.user.name}</h4>
              <h5 className="text-muted">@{comment.user.username}</h5>
            </div>

          </div>
          <div className="col-sm-10">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="col-sm-12">
                  {comment.comment.message}
                </div>
                <div className="col-sm-12">
                  <div className={style.likes}>
                    <button className="btn btn-primary pull-left">
                      <span className={style.likesCount}>{comment.comment.likes}</span>
                      <span className="glyphicon glyphicon-thumbs-up"/>
                    </button>
                  </div>
                  <button className="pull-right btn btn-link">Responder</button>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"/>
        </div>
        {comment.comment.comments.map((comment, i) => (
          <div className={style.subComment}>
            <CommentDetail comment={comment}/>
          </div>
        ))}
      </div>
    )
  }
}