import React from 'react';
import ReactDOM from 'react-dom';

import {NavLink} from 'react-router-dom';

import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

import ReactResizeDetector from 'react-resize-detector';

export default class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minHeight: 0,
      footerMargin: 0
    };

    this.updateHeight = this.updateHeight.bind(this);
  }

  componentDidMount() {
    this.updateHeight();
  }

  updateHeight() {
    let body = this.refs.body;
    let footer = this.refs.footer;

    if (footer !== undefined) {
      this.setState({
        footerMargin: footer.getBoundingClientRect().height
      });
    }

    if (body !== undefined) {
      let bodyRect = body.getBoundingClientRect();

      if (bodyRect.height < window.innerHeight - bodyRect.y) {
        this.setState({
          minHeight: window.innerHeight - bodyRect.y
        });
      }
    }
  }

  render() {
    let breadcrumbs, footer;

    if (this.props.showBreadcrumbs === undefined || this.props.showBreadcrumbs)
      breadcrumbs = <Breadcrumbs/>;

    if (this.props.showFooter === undefined || this.props.showFooter)
      footer = <Footer/>;

    return (
      <div ref="body" id="body" className="container-fluid panel panel-default"
           style={{minHeight: this.state.minHeight}}>
          {breadcrumbs}
        <div ref="wrapper" style={{marginBottom: this.state.footerMargin}}>
          {this.props.children}
        </div>
        <div ref="footer" className="footer-wrapper">{footer}</div>
        <ReactResizeDetector handleHeight onResize={this.updateHeight}/>
      </div>
    )
  }
}
