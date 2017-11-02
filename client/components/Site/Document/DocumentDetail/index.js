import React from 'react';
import {formatDateToLocale} from '../../../Box';
import TreniumMenu, {active} from '../../../Utilities/TreniumMenu/index';
import {Link, NavLink, Route, Switch} from 'react-router-dom';
import Comments from '../../Comments/index';
import AddToGuideModal from '../../AddToGuideModal/AddToGuideModal';
import InlineDocument from '../InlineDocument';

import style from './style.less';
import HeaderSideButton from '../../../Utilities/Header/HeaderSideButton';
import Header from '../../../Utilities/Header/index';

import * as icons from '../../../../assets/flaticons';

export default class DocumentDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    }
  }

  render() {
    const {document, auth} = this.props;

    return (
      <div>
        <Header icon={icons.document} color="#FF757C" sideButton={
          <div>
            {auth.data.user_type === 'teacher' ?
              <HeaderSideButton onClick={() => {
                this.setState({showModal: true})
              }}/>
              : null}

            {document.author.id === auth.data.id ?
              <span style={{float: 'right', marginLeft: 32}}>
                <Link to={`/site/contents/${document.id}/edit`}>
                  <span className="glyphicon glyphicon-pencil"/>
                </Link>
              </span>
              : null
            }
          </div>
        }>{document.title}</Header>

        <section>
          <div className="row">
            <div className="col-md-8 col-sm-offset-2 ">
              <InlineDocument document={document}/>
            </div>

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
                    {formatDateToLocale(document.moment)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <TreniumMenu>
            <NavLink exact to={`/site/contents/${document.id}`} activeClassName={active}>Comentarios</NavLink>
            {auth.data.user_type === 'teacher' ?
              <NavLink exact to={`/site/contents/${document.id}/feedback`} activeClassName={active}>Feedback</NavLink>
              : null
            }
          </TreniumMenu>
        </section>

        <Switch>
          <Route exact path="/site/contents/:id" render={({match}) => (
            <Comments content={document} comments={document.comments}/>
          )}/>

          {auth.data.user_type === 'teacher' ?
            <Route exact path="/site/contents/:id/feedback" render={({match}) => (
              <Comments content={document} comments={[]} feedback/>
            )}/>
            : null
          }
        </Switch>

        {auth.data.user_type === 'teacher' ?
          <AddToGuideModal documentId={document.id}
                           subjectId={document.unit.subject.id}
                           show={this.state.showModal}
                           onHide={() => {this.setState({showModal: false})}}/>
          : null
        }
      </div>
    )
  }
}
