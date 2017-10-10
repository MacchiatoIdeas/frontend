import React from 'react';

import style from './Form.less';

export default ({title, children, onBackClick}) => (
  <div>
    <div className={`panel panel-default ${style.panelBack}`} onClick={onBackClick}>
      <div className={`panel-body ${style.panelBody}`}>
        <div className="row">
          <div className="col-sm-12">
            <i className="glyphicon glyphicon-arrow-left step"/>
            {' '}
            Volver
          </div>
        </div>
      </div>
    </div>

    <div className={`panel panel-default ${style.panel} ${style.formPanel}`}>
      <div className={`panel-body ${style.panelBody} ${style.formPanelBody}`}>
        <div className="row">
          <div className="col-sm-12">
            <h2 className={style.title}>{title}</h2>

            <form action="">
              {children}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
