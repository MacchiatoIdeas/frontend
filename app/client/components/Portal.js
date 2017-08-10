import React from 'react';

export default class Portal extends React.Component {
  render() {
    return (
      <div>
        <div id="header">
          <div className="container-fluid">
            <div className="row" style={{
              background: "#fff",
              borderBottom: "2px #ccc solid",
              padding: "20px",
              color: "#444",
              paddingBottom: "50px"
            }}>
              <div className="col-sm-12">
                <h1 className="page-header">
                    Marcelo Ignacio Jara Almeyda
                    <span className="glyphicon glyphicon-user pull-right"></span>
                  </h1>

                  <div className="row">
                    <div className="col-sm-4">
                      <div className="box-alt">
                        <div className="box-jumbo">4</div>
                        <div className="box-body"><h3>Controles Pendientes</h3></div>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="box-alt">
                        <div className="box-jumbo">7</div>
                        <div className="box-body"><h3>Respuestas Nuevas</h3></div>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="box-alt">
                        <div className="box-jumbo">3</div>
                        <div className="box-body"><h3>Cursos</h3></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
}
