import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Sidebar from './Sidebar';
import Students from './Students';
import Summary from './Summary';
import Guides from './Guides';
import Tests from './Tests';

export default class Course extends React.Component {
  render() {
    const course = {
      id: 1,
      name: '1ro Medio - Champagnat',
      subject: {
        id: 1,
        name: 'Lenguaje',
        color: '#cc1216',
      }
    };

    return (
      <section>
        <div className="row">
          <div className="col-sm-12">
            <h2 className="page-header">
              <i className="glyphicon glyphicon-apple pull-right" style={{color: course.subject.color}}/>
              {course.name}
            </h2>

            <div className="row">
              <div className="col-sm-3">
                <Sidebar id={course.id}/>
              </div>

              <div className="col-sm-9">
                <Switch>
                  <Route path="/portal/course/:id/students" component={Students}/>
                  <Route path="/portal/course/:id/guides" component={Guides}/>
                  <Route path="/portal/course/:id/tests" component={Tests}/>
                  <Route component={Summary}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
