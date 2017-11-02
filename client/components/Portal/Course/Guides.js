import React from 'react';
import Box from '../../Box';

import style from './style.less';

export default class Guides extends React.Component {
  render() {
    const {guides} = this.props;

    return (
      <div style={{marginLeft: 8}}>
        {guides.length === 0 ?
          <div className={style.Jumbo}>
            <h1>Su curso no tiene guías.</h1>

            <h2>Puede agregar guías visitando el material y presionando <span className="glyphicon glyphicon-plus-sign"/></h2>
          </div>
          : null
        }

        {guides.map((guide) =>
          <Box
            title={guide.guide.title}
            text={guide.guide.brief}
            author={guide.guide.author}
            date={guide.guide.moment}
            link={`/site/guides/${guide.guide.id}`}
            key={guide.guide.id}/>
        )}
      </div>
    )
  }
}
