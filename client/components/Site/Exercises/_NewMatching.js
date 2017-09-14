import React from 'react';
import {Link, NavLink} from 'react-router-dom';


import UnitPageTitle from "../UnitPageTitle";


export default class NewMatching extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      title: "",
      summary: "",
      content: {}
    }
  }



  render() {
    console.log('NEW MATCHING');
    const {unit} = this.props;

    return (
      <div>


      </div>
    )
  }
}
