import React from 'react';
import {Link} from 'react-router-dom';

import style from './DocumentBox.less'

export default ({content}) => {
  return (
    <div className={`box box-fill ${style.wrapper}`}>
      <Link to={`/site/contents/${content.id}`}>
        <div className="box-body box-body-min">
          <h2>{content.subtitle}</h2>
          <summary>{content.summary}</summary>
        </div>

        <div style={{position: 'relative'}}>
          <div className="backgrounded"
               style={{backgroundImage: 'url("http://www.fotor.com/images2/features/blur/022.jpg")'}}/>
          <div className="box-footer box-footer-stylized">
            <h3>
              <small>Creado por:</small>
              {content.author.first_name} {content.author.last_name}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  )
}
