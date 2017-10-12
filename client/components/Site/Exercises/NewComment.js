import React from 'React';

import styleDetail from './CommentDetail.less'

export default class NewComment extends React.Component {
  render() {
    return (
      <div>
        <div className={styleDetail.commentWrapper}>
          <h3>Ingresa un comentario</h3>
          <div className="col-sm-2">
            <div className={`text-center ${styleDetail.profile}`}>
              <img src="https://placeimg.com/250/250/any" className="rounded-circle"/>
              <h4>Usuario Logueado</h4>
              <h5 className="text-muted">@usuariologueado</h5>
            </div>

          </div>
          <div className="col-sm-10">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="col-sm-12">
                  <textarea name="comment"/>
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