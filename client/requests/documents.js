import {API_URL, createAuthHeaders, handleErrorIfAny} from './utils';

import store from '../store';

export const getDocumentById = (documentId) => {
  return fetch(`${API_URL}/material/contents/${documentId}`)
    .then(handleErrorIfAny);
};

export const createDocument = (unitId, title, summary, text) => {
  return fetch(`${API_URL}/material/contents/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: JSON.stringify({
      unit: unitId,
      title,
      summary,
      text,
    })
  })
    .then(handleErrorIfAny);
};

export const createDocumentComment = (documentId, text) => {
  return fetch(`${API_URL}/material/comments/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: JSON.stringify({
      content: documentId,
      text,
    })
  })
    .then(handleErrorIfAny);
};

export const createDocumentFeedbackComment = (documentId, quote, text) => {
  return fetch(`${API_URL}/material/feedback-comments/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: JSON.stringify({
      content: documentId,
      quote,
      text,
    })
  })
    .then(handleErrorIfAny);
};
