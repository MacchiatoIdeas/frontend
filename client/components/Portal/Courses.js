import React from 'react';
import PortalSidebar from "./PortalSidebar";
import FolderBox from "./FolderBox";
import CourseBox from "./CourseBox";

export default class Courses extends React.Component {
  render() {
    const courses = [
      {
        id: 1,
        name: '1ro Medio - Champagnat',
        subject: {
          id: 1,
          name: 'Lenguaje',
          color: '#cc1216',
        }
      },
      {
        id: 1,
        name: '2do Medio - Alicante',
        subject: {
          id: 1,
          name: 'Matemáticas',
          color: '#006699',
        }
      }
    ];

    return (
      <section>
        <div className="col-sm-3">
          <PortalSidebar/>
        </div>

        <div className="col-sm-9">
          <h2 className="page-header">Mis Cursos</h2>

          <div className="row">
            <div className="col-sm-12">
              <div className="playlist playlist-accents">
                {courses.map((course, i) =>
                  <CourseBox key={i} course={course}/>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"/>
      </section>
    )
  }
}
