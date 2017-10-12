import React from 'React';

import styleDetail from './CommentDetail.less';
import style from './NewComment.less';
import Textarea from 'react-textarea-autosize';

export default class NewComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    }
  }

  onUpdate(event) {
    this.setState({
      comment: event.target.value,
    });
  }

  submit() {
    if (this.state.comment !== '') {
      /* Submit comment */
      this.clear();
    }
  }

  clear() {
    this.setState({
      comment: '',
    })
  }

  render() {
    const {user} = this.props;
    console.log(user);
    return (
      <section className={style.wrapper}>
        <div className="col-sm-12">
          <div className={styleDetail.commentWrapper}>
            <h3>Ingresa un comentario</h3>
            <div className="col-sm-2">
              <div className={`text-center ${styleDetail.profile}`}>
                <img src="https://placeimg.com/250/250/any" className="rounded-circle"/>
                <h4>{`${user.first_name} ${user.last_name}`}</h4>
                <h5 className="text-muted">{`@${user.username}`}</h5>
              </div>
            </div>

            <div className="col-sm-10">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="col-sm-12">
                    <Textarea id={style.textarea} name="comment" onChange={this.onUpdate.bind(this)}
                              value={this.state.comment} placeholder="Ingresa aquí un comentario"/>
                    <div className="clearfix"/>
                  </div>
                  <div className="clearfix"/>
                </div>
              </div>
              <button className={`btn btn-success pull-right ${style.submit}`} onClick={this.submit.bind(this)}>Guardar
                comentario
              </button>
            </div>
            <div className="clearfix"/>
          </div>
        </div>
        <div className="clearfix"/>
      </section>
    )
  }
}