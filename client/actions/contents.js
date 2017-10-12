import fetch from 'isomorphic-fetch';

import {API_URL} from '../api';
import {
  CONTENT_FETCH, CONTENT_RECEIVE, CONTENT_COMMENT_SEND, CONTENT_COMMENT_RECEIVE,
  DOCUMENT_COMMENT_SEND, DOCUMENT_COMMENT_RECEIVE
} from './index';
import {normalize} from 'normalizr';
import {content} from '../schema';

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
    }));
};

export const sendDocumentComment = (token, comment) => (dispatch) => {
  dispatch({
    type: DOCUMENT_COMMENT_SEND,
  });

  return fetch(`${API_URL}/material/comments/`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  })
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(data => {
      dispatch({
        type: DOCUMENT_COMMENT_RECEIVE,
        payload: data,
      });
    });
};
