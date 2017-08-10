import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-target" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a className="navbar-brand" href="#">Brand</a>
          </div>

          <div className="collapse navbar-collapse" id="collapse-target">
            <ul className="nav navbar-nav">
              <li><a href="/">Inicio</a></li>
              <li className="active"><a href="/fields">Materias</a></li>
              <li><a href="/">Mi Portal</a></li>
            </ul>

            <div className="navbar-nav navbar-right">
              <ul className="nav navbar-nav">
                <li><a href="/"><span className="glyphicon glyphicon-search"></span></a></li>
                <li><a href="/"><span className="glyphicon glyphicon-cog"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
