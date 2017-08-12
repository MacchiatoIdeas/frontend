import fetch from 'isomorphic-fetch';

import {API_URL} from '../api';

export const getContentById = (id) => (dispatch) => {
  dispatch({
    type: 'CONTENT_FETCH_ONE'
  });
  return fetch(`${API_URL}/material/content/${id}`)
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(content => {
      dispatch(receiveContent(content));
    })
}

export const receiveContent = (content) => ({
  type: 'CONTENT_RECEIVE_ONE',
  payload: content
})
