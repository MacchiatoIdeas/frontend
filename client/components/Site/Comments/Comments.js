import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import CommentDetail from "./CommentDetail";
import NewComment from "./NewComment";
import {connect} from 'react-redux';

let comments = [
  {
    'user': {
      'name': 'Hernán Herreros niño',
      'username': 'hernanherreros',
      'profilePicture': 'https://scontent.fscl11-1.fna.fbcdn.net/v/t31.0-8/12094768_10207447177437061_3579541229331540346_o.jpg?oh=d21c5a7179484a9b69d0d8b79eacc97f&oe=5A39D148',
    },
    'comment': {
      'message': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam architecto aspernatur assumenda, corporis dolore impedit in incidunt nulla quasi, quisquam unde voluptas. Ad, consequatur distinctio nemo pariatur quod voluptatibus',
      'likes': 10,
      'date': '11 de Octubre de 2017',
    }
  }, {
    'user': {
      'name': 'Marcelo Jara Almeyda',
      'username': 'mijara',
      'profilePicture': 'https://scontent.fscl11-1.fna.fbcdn.net/v/t1.0-9/10491160_325299714294888_9198989713001742815_n.jpg?oh=6c9d70550c9d78c10464a7c276ef00e7&oe=5A816AAF',
    },
    'comment': {
      'message': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam architecto aspernatur assumenda, corporis dolore impedit in incidunt nulla quasi, quisquam unde voluptas. Ad, consequatur distinctio nemo pariatur quod voluptatibus',
      'likes': 10,
      'date': '11 de Octubre de 2017',
    }
  }, {
    'user': {
      'name': 'Hernán Herreros niño',
      'username': 'hernanherreros',
      'profilePicture': 'https://scontent.fscl11-1.fna.fbcdn.net/v/t31.0-8/12094768_10207447177437061_3579541229331540346_o.jpg?oh=d21c5a7179484a9b69d0d8b79eacc97f&oe=5A39D148',
    },
    'comment': {
      'message': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam architecto aspernatur assumenda, corporis dolore impedit in incidunt nulla quasi, quisquam unde voluptas. Ad, consequatur distinctio nemo pariatur quod voluptatibus',
      'likes': 10,
      'date': '11 de Octubre de 2017',
    }
  },

];

@connect((state) => ({
  auth: state.auth,
}))
export default class Comment extends React.Component {

  render() {
    const {auth} = this.props;
    console.log(auth);
    return (
      <div>
        <section>
          <h1>Comentarios</h1>
          <br/>
          <div className="col-sm-12">
            {comments.map((comment, i) =>
              <CommentDetail comment={comment} key={i}/>
            )}
          </div>
          <br/>
          <div className="clearfix"/>
        </section>
        {auth.isAuthenticated ?
          <NewComment user={auth.user} exercise={this.props.exercise} content={this.props.content}/>
          : null}
      </div>
    )
  }
}

