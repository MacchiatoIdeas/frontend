import React from 'react';
import {Link} from 'react-router-dom';

import style from './SubjectBox.less'

export default class SubjectBox extends React.Component {

  render() {
    let showTitle = this.props.showTitle !== undefined ? this.props.showTitle : true;
    let subject = this.props.subject;

    let color;
    let htmlTitle;
    let cssClass;

    if (showTitle) color = subject.color;
    if (showTitle) htmlTitle = (
      <div className={style.subjectNameWrapper}>
        <span className={`${style.subjectName} lead`}>
          {subject.name}
        </span>
      </div>
    );

    if (showTitle) cssClass = style.subjectWrapper;
    else cssClass = style.subjectWrapper + ' ' + style.noBorder;

    return (
      <div>
        <div id="image-subject-wrapper" className={cssClass} style={{borderColor: `${color}`}}>
          <Link to={`/site/subjects/${subject.id}`}>
            <img src={subject.thumbnail} className="box-thumbnail" alt={subject.name}/>
          </Link>
          {htmlTitle}
        </div>
        <br/>
      </div>
    )
  };
}
