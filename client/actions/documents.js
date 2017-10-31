import fetch from 'isomorphic-fetch';

import {API_URL} from '../api';
import {DOCUMENT_COMMENT_SEND, DOCUMENT_COMMENT_RECEIVE, DOCUMENT_FETCH, DOCUMENT_RECEIVE} from './index';
import {content} from '../schema';
import {getDocumentById} from '../requests/documents';

export const getDocumentByIdAction = (documentId) => (dispatch) => {
  dispatch({
    type: DOCUMENT_FETCH
  });

  return getDocumentById(documentId)
    .then(response => dispatch({
      type: DOCUMENT_RECEIVE,
      payload: response,
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
