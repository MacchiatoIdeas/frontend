import React from 'react';
import {Switch} from 'react-router-dom';

export default class Site extends React.Component {
  render() {
    console.log(1);

    return (
      <div>
        <Navbar />

        <div className="container" style={{ marginTop: "32px" }}>
          <Switch>
            <Route exact path="/fields" component={FieldList}/>
            <Route path="/fields/:slug" component={Field}/>
            <Route path="/unit/:slug" component={Unit}/>
            <Route path="/content/:id" component={Content}/>
          </Switch>
        </div>
      </div>
    )
  }
}
