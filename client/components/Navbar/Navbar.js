import React from 'react';

import {NavLink} from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import {exercisesIcon, guidesIcon, materialsIcon} from '../../assets/flaticons';
import style from './Navbar.less';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false,
      searchInput: "",
    };
    this.openSearch = this.openSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  openSearch() {
    this.setState({
      searchOpen: true,
    });

    this.input.focus();
  }

  closeSearch() {
    this.setState({
      searchOpen: false,
      searchInput: "",
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

  render() {
    let transparentClass = this.props.transparent ? style.transparent : "";
    let searchStyle = this.state.searchOpen ? style.navbarSearch : "";

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
              <a className="brand" href="#"><img height="20" src={logo}/></a>
            </div>

            <div className="collapse navbar-collapse" id="collapse-target">
              <ul className="nav navbar-nav">
                <li><NavLink to="/portal" activeClassName="active">Mi Portal</NavLink></li>
                <li><NavLink to="/site" activeClassName="active">Materias</NavLink></li>
              </ul>

              <div className="navbar-nav navbar-right">
                <ul className="nav navbar-nav">
                  <li><a className={style.button} onClick={this.openSearch}><span className="icon-search-v3"/></a></li>
                  <li><a href="/"><span className="icon-cog-v3"/></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.searchBody}>
            <input ref={(input) => {
              this.input = input;
            }} value={this.state.searchInput} onChange={this.onInputChange} type="text"
                   className={`${style.inputSearch}`} placeholder="Inserte su búsqueda aquí"/>
            <button onClick={this.closeSearch} className={style.closeSearch}><span
              className="glyphicon glyphicon-remove"/></button>
          </div>
        </div>
        <div className={style.resultsBody}>
          <div className={style.placeholder}>
            <div className="col-sm-8 col-sm-offset-2 text-center">
              <p className="lead text-muted">¿Qué estás buscando?</p>
              <div className="col-sm-12">
                <div className="col-sm-4">
                  <div className={style.item}>
                    <img src={exercisesIcon} alt=""/>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className={style.item}>
                    <img src={guidesIcon} alt=""/>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className={style.item}>
                    <img src={materialsIcon} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
