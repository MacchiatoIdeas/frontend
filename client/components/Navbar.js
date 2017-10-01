import React from 'react';

import {NavLink} from 'react-router-dom';

import logo from '../assets/img/logo.png'

export default class Navbar extends React.Component {
  render() {
    const {backgroundColor} = this.props;

    return (
      <nav id="navbar" className="navbar navbar-default" style={{
        backgroundColor: backgroundColor
      }}>
        <div className="container-fluid">
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
                <li><a href="/"><span className="icon-search-v3"/></a></li>
                <li><a href="/"><span className="icon-cog-v3"/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
