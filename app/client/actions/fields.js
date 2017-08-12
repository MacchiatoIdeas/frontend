import fetch from 'isomorphic-fetch';

import {API_URL} from '../api';

export const getAllFields = () => (dispatch) => {
  dispatch({
    type: 'FIELD_FETCH_LIST',
  });

  return fetch(`${API_URL}/material/fields/`)
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(content => dispatch({
      type: 'FIELD_RECEIVE_LIST',
      fields: content
    }))
}
