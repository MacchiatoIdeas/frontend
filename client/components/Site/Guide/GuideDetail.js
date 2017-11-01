import React from 'react';

import css from '../../../style/FluidPage.less';
import Exercise from '../Exercises/ExerciseDetail/Exercise';
import Header from '../../Utilities/Header';

import * as icons from '../../../assets/flaticons';
import {Link} from 'react-router-dom';
import AppuntaModal from '../../Utilities/TreniumModal/index';

import {Form} from '../../Utilities/TreniumForm/style.less';
import Select from '../../Utilities/Select/index';
import InlineDocument from '../Document/InlineDocument';
import AddToCourseModal from "./AddToCourseModal/index";

export default class GuideDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    }
  }

  render() {
    const {guide} = this.props;

    return (
      <div>
        <Header color="#efa467" textColor="#fff" icon={icons.guides} sideButton={
          <Link to="#" onClick={() => {this.setState({showModal: true})}}>
            <span className="glyphicon glyphicon-plus-sign"/>
          </Link>
        }>{guide.title}</Header>

        <section>
          <div className="row">
            <div className={`col-sm-8 col-sm-offset-2 ${css.content}`}>
              {guide.items.map((item, i) => {
                if (item.type === 'content') {
                  return (
                    <div key={i}>
                      <InlineDocument document={item.item}/>
                      <hr/>
                    </div>
                  );
                } else if (item.type === 'exercise') {
                  return (
                    <div key={i}>
                      <Exercise exercise={item.item}/>
                      <hr/>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </section>

        <AddToCourseModal show={this.state.showModal}
                          guideId={guide.id}
                          onHide={() => {this.setState({showModal: false})}} />
      </div>
    )
  }
}