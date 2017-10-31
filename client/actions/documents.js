import fetch from 'isomorphic-fetch';

import {API_URL} from '../api';
import {DOCUMENT_COMMENT_SEND, DOCUMENT_COMMENT_RECEIVE, DOCUMENT_FETCH, DOCUMENT_RECEIVE} from './index';
import {createDocumentComment, getDocumentById} from '../requests/documents';

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

export const createDocumentCommentAction = (documentId, text) => (dispatch) => {
  dispatch({
    type: DOCUMENT_COMMENT_SEND,
  });

  return createDocumentComment(documentId, text)
    .then(data => {
      dispatch({
        type: DOCUMENT_COMMENT_RECEIVE,
        payload: data,
      });
    });
};
