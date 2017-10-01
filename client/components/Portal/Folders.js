import React from 'react';
import PortalSidebar from "./PortalSidebar";
import FolderBox from "./FolderBox";

export default class Folders extends React.Component {
  render() {
    const folders = [
      {
        id: 1,
        name: 'Carpeta de Lenguaje',
        subject: {
          id: 1,
          name: 'Lenguaje',
          color: '#cc1216',
        }
      },
      {
        id: 2,
        name: 'Carpeta de Matemática',
        subject: {
          id: 2,
          name: 'Matemática',
          color: '#0066cc',
        }
      }
    ];

    return (
      <section>
        <div className="col-sm-3">
          <PortalSidebar/>
        </div>

        <div className="col-sm-9">
          <h2 className="page-header">Mis Carpetas</h2>

          <div className="row">
            {folders.map((folder, i) =>
              <div className="col-md-6" key={i}>
                <FolderBox folder={folder}/>
              </div>
            )}
          </div>
        </div>
        <div className="clearfix"/>
      </section>
    )
  }
}
