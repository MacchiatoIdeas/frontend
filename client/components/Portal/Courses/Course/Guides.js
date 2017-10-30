import React from 'react';
import Box from '../../../Box';

export default class Guides extends React.Component {
  render() {
    const guide = {
      id: 1,
      title: 'Guía de Curso',
      brief: 'Guía de Curso',
      author: {
        first_name: 'Marcelo',
        last_name: 'Jara',
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
