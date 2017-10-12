import React from 'react';
import {Link} from 'react-router-dom';

import style from './SubjectBox.less'

export default class SubjectBox extends React.Component {
  render() {
    const {subject, showTitle = false, showLink = true} = this.props;

    return (
      <div>
        <div id="image-subject-wrapper"
             className={`${style.subjectWrapper} ${showTitle ? '' : style.noBorder}`}
             style={{borderColor: `${subject.color}`}}>
          {showLink ?
            <Link to={`/site/subjects/${subject.id}`}>
              <img src={subject.thumbnail} className="box-thumbnail" alt={subject.name}/>
            </Link>
            :
            <img src={subject.thumbnail} className="box-thumbnail" alt={subject.name}/>
          }

          {showTitle ?
            <div className={style.subjectNameWrapper}>
              <span className={`${style.subjectName} lead`}>
                {subject.name}
              </span>
            </div> : null}
        </div>
        <br/>
      </div>
    )
  };
}
