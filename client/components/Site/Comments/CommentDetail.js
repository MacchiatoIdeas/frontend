import React from 'react';

import {IntlMixin} from 'react-intl';
import {IntlProvider, FormattedDate, addLocaleData, FormattedTime} from 'react-intl';
import es from 'react-intl/locale-data/es';

import style from './CommentDetail.less'

export default class CommentDetail extends React.Component {
  render() {
    let {comment} = this.props;
    let date = new Date(comment.date);
    addLocaleData([...es]);
    return (
      <div>
        <div className={style.commentWrapper}>
          <div className="col-sm-2">
            <div className={`text-center ${style.profile}`}>
              <img src="https://placeimg.com/250/250/any" alt={comment.user.name} className="rounded-circle"/>
              <h4>{`${comment.user.first_name} ${comment.user.last_name}`}</h4>
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
                    <span className={`pull-right ${style.date}`}>
                      <IntlProvider locale="es">
                      <FormattedDate
                        value={comment.date}
                        day="numeric"
                        month="long"
                        year="numeric"
                      />
                      </IntlProvider>
                      <span> a las </span>
                      <IntlProvider locale="es">
                      <FormattedTime
                        value={comment.date}
                      />
                      </IntlProvider>
                    </span>
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