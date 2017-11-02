import React from 'react';

import CommentDetail from './CommentDetail';
import NewComment from './NewComment';
import {connect} from 'react-redux';

import style from './style.less';

@connect((state) => ({
  auth: state.auth,
}))
export default class Comments extends React.Component {
  render() {
    const {auth, feedback} = this.props;
    const {content, exercise, comments} = this.props;

    return (
      <div className={style.Comments}>
        <section>
          <div className="col-sm-12">
            {comments.length === 0 ?
              <div className={style.emptyMessage}>
                No hay comentarios en este momento...
                <span>¡Puedes ser el primero!</span>
              </div>
              : null
            }

            {comments.map((comment, i) =>
              <CommentDetail comment={comment} key={i}/>
            )}
          </div>
          <br/>
          <div className="clearfix"/>
        </section>

        {auth.isAuthenticated ?
          <NewComment user={auth.data.user} exercise={exercise} content={content} feedback/>
          : null}
      </div>
    )
  }
}

