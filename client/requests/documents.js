import {API_URL, createAuthHeaders} from './utils';

import store from '../store';

export const getDocumentById = (documentId) => {
  return fetch(`${API_URL}/material/contents/${documentId}`)
    .then(
      response => response.json(),
      error => console.log(error)
    );
};

export const createDocument = (unitId, title, summary, text) => {
  return fetch(`${API_URL}/material/contents/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: {
      unit: unitId,
      title,
      summary,
      text,
    }
  })
    .then(
      response => response.json(),
      error => console.log(error)
    );
};

export const createDocumentComment = (documentId, text) => {
  return fetch(`${API_URL}/material/comments/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: {
      content: documentId,
      text,
    }
  })
    .then(
      response => response.json(),
      error => console.log(error)
    )
};

export const createFeedbackComment = (documentId, quote, text) => {
  return fetch(`${API_URL}/material/feedback-comments/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: {
      content: documentId,
      quote,
      text,
    }
  })
    .then(
      response => response.json(),
      error => console.log(error)
    );
};
