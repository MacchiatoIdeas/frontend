import React from 'react';
import {Link, NavLink, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getDocumentByIdAction} from '../../../actions/documents';

import Comments from '../Comments/index';

import Header from '../../Utilities/Header/index';

import * as icons from '../../../assets/flaticons';

import style from './style.less';

import TreniumMenu, {active} from '../../Utilities/TreniumMenu/index';
import BodyLoading from '../../Utilities/BodyLoading/index';
import InlineDocument from './InlineDocument';
import HeaderSideButton from '../../Utilities/Header/HeaderSideButton';
import AddToGuideModal from '../AddToGuideModal/AddToGuideModal';

@connect((state, props) => ({
  document: state.visibleDocument,
  auth: state.auth,
}), {
  getDocumentByIdAction
})
export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getDocumentByIdAction(id);
  }

  render() {
    const {auth, document} = this.props;

    if (document.isLoading) {
      return <BodyLoading/>
    }

    return (
      <div>
        <Header icon={icons.document} color="#FF757C" sideButton={
          <HeaderSideButton onClick={() => {
            this.setState({showModal: true})
          }}/>
        }>{document.title}</Header>

        <section>
          <div className="row">
            <div className="col-md-8 col-sm-offset-2 ">
              <InlineDocument document={document}/>
            </div>

            <div className={`col-md-8 col-sm-offset-2 ${style.Document}`}
                 dangerouslySetInnerHTML={{__html: document.html_text}}/>

            <div className="col-md-6 col-sm-offset-2">
              <div className={`row ${style.Author}`}>
                <div className="col-sm-1">
                  <img src="http://www.twitrcovers.com/wp-content/uploads/2012/11/Gaussian-Blur-l.jpg"
                       className={style.profilePic}/>
                </div>

                <div className="col-sm-11">
                  <div>
                    <Link to={`/site/users/${document.author.id}`}>
                      {document.author.first_name}
                      {' '}
                      {document.author.last_name}
                    </Link>
                  </div>

                  <div>
                    25 de Mayo de 2017
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <TreniumMenu>
            <NavLink exact to={`/site/contents/${document.id}`} activeClassName={active}>Comentarios</NavLink>
            <NavLink exact to={`/site/contents/${document.id}/feedback`} activeClassName={active}>Feedback</NavLink>
          </TreniumMenu>
        </section>

        <Switch>
          <Route exact path="/site/contents/:id" render={({match}) => (
            <Comments content={document} comments={document.comments}/>
          )}/>

          <Route exact path="/site/contents/:id/feedback" render={({match}) => (
            <Comments content={document} comments={[]}/>
          )}/>
        </Switch>

        <AddToGuideModal documentId={document.id} subjectId={document.unit.subject.id} show={this.state.showModal} onHide={() => {
          this.setState({showModal: false})
        }}/>
      </div>
    )
  }
}
