/* eslint-disable quotes */
import React from 'react';
import {Link, NavLink, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getContentById} from '../../../actions/contents';

import Comments from '../Comments/index';

import Header from '../../Utilities/Header/index';

import * as icons from '../../../assets/flaticons';
import Loading from '../../Utilities/Loading/index';

import style from './style.less';
import AppuntaModal from "../../Utilities/AppuntaModal/index";
import Select from "../../Utilities/Select/index";

import {Form} from '../../Utilities/Form/style.less';
import {active} from '../../Utilities/Menu/style.less';
import Menu from "../../Utilities/Menu/index";

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
    unit: state.units[content.unit],
    author: {
      id: 1,
      first_name: 'Marcelo',
      last_name: 'Jara',
    }
  };
  content.unit = {
    ...content.unit,
    subject: state.subjects[content.unit.subject],
  };

  return {
    content,
    auth: state.auth,
  }
}, {
  getContentById
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
    this.props.getContentById(id);
  }

  render() {
    if (this.props.isFetching) {
      return (
        <div style={{marginTop: 64, marginBottom: 32}}>
          <Loading color="#444"/>
        </div>
      );
    }

    const {content} = this.props;
    const {auth} = this.props;

    return (
      <div>
        <Header icon={icons.document} color="#FF757C" sideButton={
          <Link to="#" onClick={() => {
            this.setState({showModal: true})
          }}>
            <span className="glyphicon glyphicon-plus-sign"/>
          </Link>
        }>{content.subtitle}</Header>

        <section>
          <div className="row">
            <div className={`col-md-8 col-sm-offset-2 ${style.Document}`}
                 dangerouslySetInnerHTML={{__html: content.html_text}}/>

            <div className="col-md-6 col-sm-offset-2">
              <div className={`row ${style.Author}`}>
                <div className="col-sm-1">
                  <img src="http://www.twitrcovers.com/wp-content/uploads/2012/11/Gaussian-Blur-l.jpg"
                       className={style.profilePic}/>
                </div>

                <div className="col-sm-11">
                  <div>
                    <Link to={`/site/users/${content.author.id}`}>
                      {content.author.first_name}
                      {' '}
                      {content.author.last_name}
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
          <Menu>
            <NavLink exact to={`/site/contents/${content.id}`} activeClassName={active}>Comentarios</NavLink>
            <NavLink exact to={`/site/contents/${content.id}/feedback`} activeClassName={active}>Feedback</NavLink>
          </Menu>
        </section>

        <Switch>
          <Route exact path="/site/contents/:id" render={({match}) => (
            <Comments content={content} comments={content.comments}/>
          )}/>

          <Route exact path="/site/contents/:id/feedback" render={({match}) => (
            <Comments content={content} comments={[]}/>
          )}/>
        </Switch>

        <AppuntaModal show={this.state.showModal}
                      onHide={() => {
                        this.setState({showModal: false})
                      }}
                      title="Agregar documento a guía"
                      icon={icons.guidesv2}
                      color="#FFCA4F">
          <form className={Form}>
            <label htmlFor="">
              <div>Guía</div>
              <Select options={[
                {
                  value: 1,
                  name: 'Guia numero uno',
                  sideText: 'Lenguaje'
                }, {
                  value: 2,
                  name: 'Guia numero dos',
                  sideText: 'Matemáticas'
                }
              ]}>
              </Select>
            </label>

            <button>Continuar</button>
          </form>
        </AppuntaModal>
      </div>
    )
  }
}
