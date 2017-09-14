import fetch from 'isomorphic-fetch';
import {normalize} from 'normalizr';
import {unit} from '../schema';

import {API_URL} from '../api';
import {UNIT_FETCH, UNIT_RECEIVE} from './index';


export const getUnitById = (id, force) => (dispatch) => {
  dispatch({
    type: UNIT_FETCH,
  });

  return fetch(`${API_URL}/material/units/${id}/`)
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(response => dispatch({
      type: UNIT_RECEIVE,
      payload: normalize(response, unit)
    }));
};
