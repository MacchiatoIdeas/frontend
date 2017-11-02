import React from 'react';

import style from '../../../style/FluidPage.less';
import Exercise from '../Exercises/ExerciseDetail/Exercise';
import Header from '../../Utilities/Header';

import * as icons from '../../../assets/flaticons';
import {Link} from 'react-router-dom';

import InlineDocument from '../Document/InlineDocument';
import AddToCourseModal from './AddToCourseModal/index';
import {connect} from 'react-redux';

@connect(state => ({
  auth: state.auth,
}))
export default class GuideDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  render() {
    const {auth, guide} = this.props;

    return (
      <div>
        <Header color="#efa467" textColor="#fff" icon={icons.guides} sideButton={
          <div>
            {auth.data.user_type === 'teacher' ?
              <Link to="#" onClick={() => {
                this.setState({showModal: true})
              }}>
                <span className="glyphicon glyphicon-plus-sign"/>
              </Link>
              : null}

            {auth.data.id === guide.author.id ?
              <Link to={`/site/guides/${guide.id}/edit`} style={{marginLeft: 32}}>
                <span className="glyphicon glyphicon-pencil"/>
              </Link>
              : null}

            <Link to="#" style={{marginLeft: 32}}>
              <span onClick={window.print} className="glyphicon glyphicon-print"/>
            </Link>
          </div>
        }>{guide.title}</Header>

        <section ref="printArea">
          <div className="row">
            <div className={`col-sm-8 col-sm-offset-2 ${style.content}`}>
              {guide.items.map((item, i) => {
                if (item.type === 'content') {
                  return (
                    <div key={i}>
                      <InlineDocument document={item.item}/>
                      <hr/>
                    </div>
                  );
                } else if (item.type === 'exercise') {
                  console.log(item.item);
                  return (
                    <div key={i}>
                      <Exercise exercise={item.item} autoCorrect/>
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
                          onHide={() => {
                            this.setState({showModal: false})
                          }}/>
      </div>
    )
  }
}
