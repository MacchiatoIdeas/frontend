import React from 'react';
import {Link} from 'react-router-dom';

export default ({guide}) =>
  <div className="box box-fill">
    <Link to={`/site/contents/1`}>
      <div className="box-body box-body-min">
        <h2>{guide.title}</h2>
        <summary>{guide.brief}</summary>
      </div>

      <div style={{position: 'relative'}}>
        <div className="backgrounded"
             style={{backgroundImage: `url("http://www.twitrcovers.com/wp-content/uploads/2012/11/Gaussian-Blur-l.jpg")`}}/>
        <div className="box-footer box-footer-stylized">
          <h3>
            <small>Creada por:</small>
            {guide.author.first_name} {guide.author.last_name}
          </h3>
        </div>
      </div>
    </Link>
  </div>;
