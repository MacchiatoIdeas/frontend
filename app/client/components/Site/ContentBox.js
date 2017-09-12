import React from 'react';
import {Link} from 'react-router-dom';

const ContentBox = ({ content }) =>
  <div className="box box-fill">
    <Link to={`/site/contents/${content.id}`}>
      <div className="box-body box-body-min">
        <h2>{content.subtitle}</h2>
        <summary>{content.summary}</summary>
      </div>

      <div style={{position: "relative"}}>
        <div className="backgrounded" style={{backgroundImage: `url("${content.author.banner}")`}}/>
        <div className="box-footer box-footer-stylized">
          <h3><small>Creado por:</small> {content.author.first_name} {content.author.last_name}</h3>
        </div>
      </div>
    </Link>
  </div>;

export default ContentBox;
