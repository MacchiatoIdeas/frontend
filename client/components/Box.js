import React from 'react';

import style from './Box.less';
import {Link} from 'react-router-dom';

const Box = ({title, link, text, author, date, comments, linkText}) =>
  <div className={`box box-fill ${style.Box}`}>
    <div className="row">
      <div className="col-sm-1">
        <img src="http://www.twitrcovers.com/wp-content/uploads/2012/11/Gaussian-Blur-l.jpg"
             className={style.profilePic}
        />
      </div>

      <div className="col-sm-11">
        <div>
          <Link to={`/site/users/${author.id}`}>
            {author.first_name}
            {' '}
            {author.last_name}
          </Link>
        </div>

        <div>
          {date}
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        {linkText === undefined ?
          <Link to={link}>
            <h2 className={style.title}>{title}</h2>
          </Link>
          : <p/>
        }

        <div className={style.brief}>
          {text}
        </div>
      </div>
    </div>

    <div style={{marginTop: 8}}>
      {linkText !== undefined ?
        <div className="pull-left">
          <Link to={link}>
            {linkText} &raquo;
          </Link>
        </div>
        : null
      }

      {comments !== undefined ?
        <div className="pull-right">
          {comments} comentarios
        </div>
        : null
      }
    </div>

    <div className="clearfix"/>
  </div>;

export default Box;