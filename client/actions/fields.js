import fetch from 'isomorphic-fetch';
import { normalize } from 'normalizr';
import { fieldArray, field } from '../schema';

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
    .then(response => dispatch({
      type: 'FIELD_RECEIVE_LIST',
      payload: normalize(response, fieldArray)
    }))
}

export const getFieldById = (id) => (dispatch, getState) => {
  dispatch({
    type: 'FIELD_FETCH_ONE'
  });

  return fetch(`${API_URL}/material/field-of-study/${id}/`)
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(response => dispatch({
      type: 'FIELD_RECEIVE_ONE',
      payload: normalize(response, field)
    }));
}
