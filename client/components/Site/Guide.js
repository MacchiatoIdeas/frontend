import React from 'react';

import css from '../../style/FluidPage.less';

export default class Guide extends React.Component {
  render() {
    return (
      <div className={`container-fluid ${css.fluidPage}`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="page-header">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, eum?</h2>
            </div>
          </div>

          <div className="row">
            <div className={`col-sm-9 ${css.content}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores at corporis cum et facilis id
              iste iusto, magnam modi nulla officiis perspiciatis placeat qui quisquam repudiandae rerum tempora voluptas.
            </div>

            <div className={`col-sm-3 ${css.toc}`}>
              <div className="list-group">
                <a href="#" className={`list-group-item ${css.tocItem}`}>
                  <strong>1)</strong> Lorem ipsum dolor sit amet.
                </a>
                <a href="#" className={`list-group-item ${css.tocItem}`}>
                  <strong>2)</strong> Lorem ipsum dolor sit.
                </a>
                <a href="#" className={`list-group-item ${css.tocItem}`}>
                  Lorem ipsum dolor sit amet, consectetur.
                </a>
                <a href="#" className={`list-group-item ${css.tocItem}`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
