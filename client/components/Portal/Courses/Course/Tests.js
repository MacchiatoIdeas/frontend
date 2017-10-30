import React from 'react';
import Box from '../../../Box';

export default class Tests extends React.Component {
  render() {
    const guide = {
      id: 1,
      title: 'Control 1',
      brief: 'Evaluación de ecuaciones de primer grado',
      author: {
        first_name: 'Hernán',
        last_name: 'Herreros',
      }
    };

    return (
      <section>
        <Box
          title={guide.title}
          text={guide.brief}
          author={guide.author}
          date={'25 de Mayo de 2017'}
          link={`/site/guides/${guide.id}`}
        />
      </section>
    )
  }
}
