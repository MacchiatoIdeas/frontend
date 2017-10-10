import React from 'react';
import {Link} from 'react-router-dom';

const FolderBox = ({ folder }) =>
  <div className="box" style={{borderBottomColor: folder.subject.color}}>
    <Link to="#">
      <div className="box-body box-body-min" style={{paddingBottom: '8px'}}>
        <h2 className="page-header" style={{color: '#333'}}>{folder.name}</h2>

        <div className="pull-right">
          <div className="label label-default" style={{margin: '4px', backgroundColor: '#e1e1e1', color: '#666'}}>
            1 ejercicio
          </div>

          <div className="label label-default" style={{margin: '4px', backgroundColor: '#e1e1e1', color: '#666'}}>
            30 contenidos
          </div>
        </div>

        <div className="text-muted">
          <strong>{folder.subject.name}</strong>
        </div>
      </div>
    </Link>
  </div>;

export default FolderBox;
