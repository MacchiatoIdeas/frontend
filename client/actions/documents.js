import {
  DOCUMENT_COMMENT_SEND, DOCUMENT_COMMENT_RECEIVE, DOCUMENT_FETCH, DOCUMENT_RECEIVE,
  DOCUMENT_UPDATE_SEND, DOCUMENT_UPDATE_RECEIVE
} from './index';
import {createDocumentComment, getDocumentById, updateDocument} from '../requests/documents';

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
    .then(data => dispatch({
      type: DOCUMENT_COMMENT_RECEIVE,
      payload: data,
    }));
};

export const updateDocumentAction = (...args) => (dispatch) => {
  dispatch({
    type: DOCUMENT_UPDATE_SEND
  });

  return updateDocument(...args)
    .then(response => dispatch({
      type: DOCUMENT_UPDATE_RECEIVE,
      payload: response,
    }));
};
