import React from 'react';
import Box from '../../Box';

const Guides = ({guides}) =>
  <div>
    {guides.map((guide, i) =>
      <Box
        key={guide.id}
        title={guide.title}
        author={guide.author}
        text={guide.brief}
        link={`/site/guides/${guide.id}`}
        date={guide.moment}
      />
    )}
  </div>;

export default Guides;
