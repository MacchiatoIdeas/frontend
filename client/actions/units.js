import fetch from 'isomorphic-fetch';
import {normalize} from 'normalizr';
import {unit} from '../schema';

import {API_URL} from '../api';


export const getUnitById = (id, force) => (dispatch) => {
  dispatch({
    type: 'UNIT_FETCH_ONE',
  });

  return fetch(`${API_URL}/material/unit/${id}/`)
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(response => dispatch({
      type: 'UNIT_RECEIVE_ONE',
      payload: normalize(response, unit)
    }));
};
