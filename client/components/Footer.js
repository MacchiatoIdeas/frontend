import React from 'react';


export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div id="left-footer" className="col-md-4">
              <h3>Contacto</h3>
              <div className="list-group borderless nobg">
                <p className="text-muted">Avenida España 1680, Valparaiso, Región de Valparaiso</p>
                <a className="text-muted" href="mailto:contacto@macchiato.cl">contacto@macchiato.cl</a>
              </div>
            </div>
            <div id="center-footer" className="col-md-4">
              <h3>Footer centro</h3>
              <div className="list-group borderless nobg">
                <div className="list-group-item"><a href="#">Lorem ipsum dolor sit amet, consectetur</a></div>
                <div className="list-group-item"><a href="#">Lorem ipsum dolor sit amet, consectetur</a></div>
                <div className="list-group-item"><a href="#">Lorem ipsum dolor sit amet, consectetur</a></div>
              </div>
            </div>
            <div id="right-footer" className="col-md-4">
              <h3>Footer derecho</h3>
              <div className="list-group borderless nobg">
                <div className="list-group-item"><a href="#">Lorem ipsum dolor sit amet, consectetur</a></div>
                <div className="list-group-item"><a href="#">Lorem ipsum dolor sit amet, consectetur</a></div>
                <div className="list-group-item"><a href="#">Lorem ipsum dolor sit amet, consectetur</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="text-center lead text-muted social-icons">
              <a className="facebook" href="https://www.facebook.com/appunta" target="_blank">
                <i className="fa fa-facebook-official" aria-hidden="true"/>
              </a>
              <a className="twitter" href="https://www.twitter.com/AppuntaCL" target="_blank">
                <i className="fa fa-twitter-square" aria-hidden="true"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
