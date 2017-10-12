import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import style from './CommentDetail.less'
import Comment from "./Comments";

export default class CommentDetail extends React.Component {
  render() {
    let {comment} = this.props;
    return (
      <div>
        <div className={style.commentWrapper}>
          <div className="col-sm-2">
            <div className={`text-center ${style.profile}`}>
              <img src="https://placeimg.com/250/250/any" alt={comment.user.name} className="rounded-circle"/>
              <h4>{`${comment.user.first_name} ${comment.user.last_name}`}</h4>
              <h5 className="text-muted">@{comment.user.username}</h5>
            </div>

          </div>
          <div className="col-sm-10">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="col-sm-12">
                  {comment.text}
                </div>
                <div className="col-sm-12">
                  <div className={style.likes}>
                    <span className={`pull-right ${style.date}`}>{comment.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"/>
        </div>
      </div>
    )
  }
}