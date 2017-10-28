import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../../style/editor.css';

import {Button} from 'react-bootstrap';


export default class Geogebra extends React.Component {
  constructor(props) {
    super(props);

    this.saveGraph = this.saveGraph.bind(this)

    // Include value '"ggbBase64"' to load graph.
    this.params = {
      'height': 600,
      'id': 'geogebra',
      'showToolBar': true,
      'borderColor': null,
      'showMenuBar': false,
      'allowStyleBar': true,
      'showAlgebraInput': true,
      'enableLabelDrags': false,
      'enableShiftDragZoom': true,
      'capturingThreshold': null,
      'showToolBarHelp': false,
      'errorDialogsActive': true,
      'showTutorialLink': true,
      'showLogging': false,
      'useBrowserForJS': true,
      'perspective': 'AG',
      'ggbBase64': this.props.base64
    };
  }

  componentDidMount() {
    console.log('Geogebra Mounted');
    let applet = new GGBApplet(this.params, '5.0', 'geogebra', true);
    applet.inject();

  }

  saveGraph() {
    this.props.closeModal(geogebra.getBase64(), geogebra.getPNGBase64(1, 100));
  }

  render() {
    return (
      <div className="geogebra">
        <div ref="geogebra" id="geogebra">
          {/* Geogebra editor */}
        </div>
        <Button bsClass="btn btn-default custom red spacing" onClick={(a, b) => this.props.closeModal(null, null)}>Cerrar editor</Button>
        <Button bsClass="btn btn-default custom blue pull-right spacing" onClick={this.saveGraph}>Guardar
          gráfico</Button>
        <div className="clearfix"></div>
      </div>
    )
  }
}
