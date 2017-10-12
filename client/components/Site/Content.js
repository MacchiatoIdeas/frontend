import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getContentById} from '../../actions/contents';

import Comments from './Comments/Comments';

import SubjectBox from './SubjectBox';

import css from '../../style/FluidPage.less';
import AddItemModal from "./Guide/AddItemModal";

@connect((state, props) => {
  const {id} = props.match.params;

  let content = state.contents[id];
  if (!content) {
    return {isFetching: true}
  }

  if (!content.comments) {
    return {isFetching: true}
  }

  content = {
    ...content,
    unit: state.units[content.unit]
  };
  content.unit = {
    ...content.unit,
    subject: state.subjects[content.unit.subject]
  };

  return {
    content
  }
}, {
  getContentById
})
export default class Content extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getContentById(id);
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }

    const {content} = this.props;

    return (
      <div>
        <div className={`container-fluid ${css.fluidPage}`}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="page-header">{content.subtitle}</h2>
              </div>
            </div>

            <div className="row">
              <div className={`col-md-8 ${css.content}`} dangerouslySetInnerHTML={{__html: content.html_text}}/>
              <div className="col-md-4">
                <div className={`document-badge ${css.badge}`} style={{position: 'relative'}}>
                  <div className="backgrounded"
                       style={{backgroundImage: 'url("http://images.all-free-download.com/images/graphiclarge/green_blurred_background_200164.jpg")'}}></div>

                  <small className={css.badgeSub}>Creado por:</small>
                  <h4 className={css.badgeName}>Marcelo Ignacio Jara Almeyda</h4>
                </div>

                <div className={`box ${css.subjectBox}`} style={{borderBottomColor: content.unit.subject.color}}>
                  <Link to={`/site/subjects/${content.unit.subject.id}`}>
                    <div className={`box-body ${css.subjectBoxBody}`}>
                      <h1>{content.unit.subject.name}</h1>
                    </div>
                  </Link>
                </div>
                <AddItemModal content={content}/>
              </div>
            </div>
          </div>
        </div>
        <Comments content={content} comments={content.comments}/>
      </div>
    )
  }
}
