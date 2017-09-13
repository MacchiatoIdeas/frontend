import fetch from 'isomorphic-fetch';

import {API_URL} from '../api';
import {CONTENT_FETCH, CONTENT_RECEIVE} from './index';

export const getContentById = (id) => (dispatch) => {
  dispatch({
    type: CONTENT_FETCH
  });
  return fetch(`${API_URL}/material/content/${id}`)
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(content => {
      dispatch(receiveContent(content));
    })
};

export const receiveContent = (content) => ({
  type: CONTENT_RECEIVE,
  payload: content
});
