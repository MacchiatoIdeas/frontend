import React from 'react';
import Box from '../../Box';

export default class Guides extends React.Component {
  render() {
    const {guides} = this.props;

    return (
      <div style={{marginLeft: 8}}>
        {guides.map((guide) =>
          <Box
            title={guide.guide.title}
            text={guide.guide.brief}
            author={guide.guide.user}
            date={guide.guide.moment}
            link={`/site/guides/${guide.guide.id}`}
            key={guide.guide.id}/>
        )}
      </div>
    )
  }
}
