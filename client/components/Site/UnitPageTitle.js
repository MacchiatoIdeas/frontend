import React from 'react';

const UnitPageTitle = ({filter}) => {
  switch (filter) {
    case 'trending':
      filter = 'Trending';
      break;
    case 'most-viewed':
      filter = 'Más Visitado';
      break;
    case 'recent':
      filter = 'Recientes';
      break;
    case 'own':
      filter = 'De mi Autoría';
      break;
  }

  return (
    <h2 className="page-header">{filter}</h2>
  )
};

export default UnitPageTitle;
