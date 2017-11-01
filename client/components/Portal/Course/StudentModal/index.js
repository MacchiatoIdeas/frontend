import React from 'react';
import TreniumModal, {icons} from '../../../Utilities/TreniumModal';

import style from './style.less';

export default class StudentModal extends React.Component {
  render() {
    const {show, onHide, student} = this.props;

    if (student === undefined) {
      return null;
    }

    return (
      <TreniumModal icon={icons.student}
                    color="#FBB429"
                    onHide={onHide}
                    show={show}
                    title={`${student.user.first_name} ${student.user.last_name}`}>
        <div className="row">
          <div className="col-sm-3">
            <div className={style.StudentModal}>
              <img src='http://1.gravatar.com/avatar/4baa7b0f8a930f6ff972922583e663e7?s=50&d=mm&r=g'/>
            </div>
          </div>

          <div className={`col-sm-9 ${style.StudentBadge}`}>
            <dl>
              <dt>Correo electrónico</dt>
              <dd>{student.user.email}</dd>

              <dt>Institución</dt>
              <dd>{student.institution}</dd>
            </dl>
          </div>
        </div>
      </TreniumModal>
    )
  }
}
