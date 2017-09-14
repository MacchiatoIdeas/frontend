import fetch from 'isomorphic-fetch';

import {API_URL} from '../api';
import {CONTENT_FETCH, CONTENT_RECEIVE} from './index';
import {normalize} from "normalizr";
import {content} from "../schema";

export const getContentById = (id) => (dispatch) => {
  dispatch({
    type: CONTENT_FETCH
  });
  return fetch(`${API_URL}/material/contents/${id}`)
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(response => dispatch({
      type: CONTENT_RECEIVE,
      payload: normalize(response, content)
    }))
};

export const receiveContent = (content) => ({
});
