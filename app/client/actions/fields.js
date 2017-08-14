import fetch from 'isomorphic-fetch';
import {normalize} from 'normalizr';
import {fieldArray} from '../schema';

import {API_URL} from '../api';


export const getAllFields = () => (dispatch) => {
  dispatch({
    type: 'FIELD_FETCH_LIST',
  });

  return fetch(`${API_URL}/material/field-of-study/`)
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(content => dispatch({
      type: 'FIELD_RECEIVE_LIST',
      payload: normalize(content, fieldArray)
    }))
}
