import {API_URL} from './utils';

const getUnitById = (id) => {
  return fetch(`${API_URL}/material/units/${id}/`)
    .then(
      response => response.json(),
      error => console.log(error)
    );
};
