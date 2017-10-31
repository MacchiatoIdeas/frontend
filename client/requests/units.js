import {API_URL, handleErrorIfAny} from './utils';

export const getUnitById = (id) => {
  return fetch(`${API_URL}/material/units/${id}/`)
    .then(handleErrorIfAny);
};
