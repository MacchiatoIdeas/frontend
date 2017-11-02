import React from 'react';

import {Link, NavLink} from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import * as icons from '../../assets/flaticons';
import style from './Navbar.less';
import ReactLoading from 'react-loading';
import Box from '../Box';
import ContextMenu from './ContextMenu';
import {searchDocuments, searchExercises, searchGuides} from "../../requests/search";
import MarkdownKatex from "../Site/Document/MarkdownKatex/index";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.openSearch = this.openSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      searchOpen: false,
      searchInput: '',
      searching: false,
      showing: false,
      showContextMenu: false,
      listResult: [],
      documentsReady: false,
      exercisesReady: false,
      guidesReady: false,
    };
  }

  openSearch() {
    this.setState({
      searchOpen: true,
    });
    setTimeout(() => {
      this.input.focus();
    }, 100);
  }

  closeSearch() {
    this.setState({
      searchOpen: false,
      searchInput: '',
      searching: false,
      showing: false,
      listResult: [],
    });
  }

  onInputChange(ev) {
    this.setState({
      searchInput: ev.target.value,
    })
  }

  componentDidMount() {
    document.onkeydown = (ev) => {
      if (ev.keyCode === 27) {
        this.closeSearch();
      }
    };
  }

  search(ev) {
    if (ev.keyCode === 13) {
      this.setState({
        searching: this.state.searchInput !== '',
        showing: false,
        documentsReady: false,
        exercisesReady: false,
        guidesReady: false,
        listResult: [],
      });

      if (this.state.searchInput !== '') {
        this.searchRequest();
      }
    }
  }

  searchRequest() {
    searchDocuments(this.state.searchInput)
      .then(response => this.setState({
        searching: false,
        showing: true,
        documentsReady: true,
        listResult: [...this.state.listResult, ...response.map(item => ({
          key: item.id,
          title: item.title,
          author: item.author,
          date: item.moment,
          text: item.summary,
          comments: undefined,
          link: `/site/contents/${item.id}`,
        }))]
      }));

    searchExercises(this.state.searchInput)
      .then(response => this.setState({
        searching: false,
        showing: true,
        exercisesReady: true,
        listResult: [...this.state.listResult, ...response.map(item => ({
          title: '',
          author: item.author,
          date: item.moment,
          text: item.briefing,
          comments: item.comments.length,
          link: `/site/units/${item.unit}/exercise/${item.id}`,
          linkText: 'Ver Ejercicio',
          stars: item.difficulty
        }))]
      }));

    searchGuides(this.state.searchInput)
      .then(response => this.setState({
        searching: false,
        showing: true,
        guidesReady: true,
        listResult: [...this.state.listResult, ...response.map(item => ({
          title: item.title,
          author: item.author,
          text: item.brief,
          link: `/site/guides/${item.id}`,
          date: item.moment,
        }))]
      }));
  }

  render() {
    let transparentClass = this.props.transparent ? style.transparent : '';
    let searchStyle = this.state.searchOpen ? style.navbarSearch : '';
    let loading = this.state.searching ? style.isLoading : '';
    let showing = this.state.showing ? style.isShowing : '';

    return (
      <nav id="navbar" className={`navbar navbar-default ${transparentClass} ${style.navbar} ${searchStyle}`}>
        <div className={`container-fluid ${style.containerFluid}`}>
          <div className={style.navbarBody}>
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#collapse-target" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
              </button>
              <Link className="brand" to="/"><img height="20" src={logo}/></Link>
            </div>

            <div className="collapse navbar-collapse" id="collapse-target">
              <ul className="nav navbar-nav">
                <li><NavLink to="/portal" activeClassName="active">Mi Portal</NavLink></li>
                <li><NavLink to="/site" activeClassName="active">Materias</NavLink></li>
              </ul>

              <div className="navbar-nav navbar-right">
                <ul className="nav navbar-nav">
                  <li><a className={style.button} onClick={this.openSearch}><span className="icon-search-v3"/></a></li>
                  <li>
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      this.setState({showContextMenu: !this.state.showContextMenu});
                    }}><span className="icon-cog-v3"/></a>

                    <ContextMenu onHide={() => this.setState({showContextMenu: false})}
                                 show={this.state.showContextMenu}/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.searchBody}>
            <input ref={(input) => {
              this.input = input;
            }} value={this.state.searchInput} onChange={this.onInputChange} onKeyDown={this.search} type="text"
                   placeholder="Inserte su búsqueda aquí" tabIndex="-1"/>
            <button onClick={this.closeSearch} className={style.closeSearch}><span
              className="glyphicon glyphicon-remove"/></button>
          </div>
        </div>
        <div className={`${style.resultsBody} ${loading} ${showing} clearfix`}>
          <div className={style.placeholder}>
            <div className="container">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                <p className="lead text-muted">¿Qué estás buscando?</p>
                <div className="col-sm-12">
                  <div className="col-xs-4">
                    <div className={style.item}>
                      <img src={icons.exercises} alt=""/>
                      <p>Ejercicios</p>
                    </div>
                  </div>
                  <div className="col-xs-4">
                    <div className={style.item}>
                      <img src={icons.guidesv2} alt=""/>
                      <p>Guías</p>
                    </div>
                  </div>
                  <div className="col-xs-4">
                    <div className={style.item}>
                      <img src={icons.materials} alt=""/>
                      <p>Material</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.loading}>
            <div className="col-sm-8 col-sm-offset-2 text-center">
              <ReactLoading type="spin" color="#666" className={style.spinner}/>
              <p>Un momento</p>
            </div>
          </div>
          <div className={style.list}>
            {this.state.listResult.map((item, key) =>
              <Box key={key}
                   title={item.title}
                   link={item.link}
                   text={item.text}
                   author={item.author}
                   date={item.date}
                   comments={item.comments}
                   linkText={item.linkText}/>
            )}
          </div>
        </div>
      </nav>
    )
  }
}
