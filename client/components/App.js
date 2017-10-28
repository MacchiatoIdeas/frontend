import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import Login from './Auth/Login';
import Portal from './Portal/Portal';
import Site from './Site/Site';
import Editor from './Editor/Editor';
import GuidesEditor from './GuidesEditor/GuidesEditor'
import Register from './Auth/Register';

export default class App extends React.Component {
  render() {
     return (
       <BrowserRouter>
         <Switch>
           <Redirect exact from="/" to="/portal"/>
           <Route path="/login" component={Login}/>
           <Route path="/register" component={Register}/>
           <Route path="/site" component={Site}/>
           <Route path="/portal" component={Portal}/>
           <Route path="/editor" component={Editor}/>
           <Route path="/guides-editor" component={GuidesEditor}/>
         </Switch>
       </BrowserRouter>
     )
  }
}
