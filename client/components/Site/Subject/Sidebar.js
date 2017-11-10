import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = ({subjectId}) =>
  <div className="playlist playlist-compact" style={{marginTop: 16}}>
    <div className="playlist-item">
      <Link to={`/site/subjects/${subjectId}/units`}>
        <div className="playlist-item-body">
          Todos
        </div>
      </Link>
    </div>

    <div className="playlist-item">
      <Link to={`/site/subjects/${subjectId}/units/1`}>
        <div className="playlist-item-body">
          Primero Medio
        </div>
      </Link>
    </div>

    <div className="playlist-item">
      <Link to={`/site/subjects/${subjectId}/units/2`}>
        <div className="playlist-item-body">
          Segundo Medio
        </div>
      </Link>
    </div>

    <div className="playlist-item">
      <Link to={`/site/subjects/${subjectId}/units/3`}>
        <div className="playlist-item-body">
          Tercero Medio
        </div>
      </Link>
    </div>

    <div className="playlist-item">
      <Link to={`/site/subjects/${subjectId}/units/4`}>
        <div className="playlist-item-body">
          Cuarto medio
        </div>
      </Link>
    </div>
  </div>;

export default Sidebar;
