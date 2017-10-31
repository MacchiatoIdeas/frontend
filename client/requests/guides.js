import {API_URL, createAuthHeaders, handleErrorIfAny} from './utils';

import store from '../store';

export const getAllOwnGuides = () => {
  return fetch(`${API_URL}/material/guides?byuser=me`, {
    headers: createAuthHeaders(store.getState().auth.access_token)
  })
    .then(handleErrorIfAny);
};

export const getGuideById = (guideId) => {
  return fetch(`${API_URL}/material/guides/${guideId}`)
    .then(handleErrorIfAny);
};

export const createGuide = (subjectId, title, brief, _private) => {
  return fetch(`${API_URL}/material/guide/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: {
      subject: subjectId,
      title,
      brief,
      private: _private
    }
  })
    .then(handleErrorIfAny);
};

export const addExerciseToGuide = (guideId, exerciseId, order) => {
  return fetch(`${API_URL}/material/guideitems/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: {
      guide: guideId,
      exercise: exerciseId,
      order,
    }
  })
    .then(handleErrorIfAny);
};

export const addDocumentToGuide = (guideId, documentId, order) => {
  return fetch(`${API_URL}/material/guideitems/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: {
      guide: guideId,
      document: documentId,
      order,
    }
  })
    .then(handleErrorIfAny);
};

export const deleteItemFromGuide = (id) => {
  return fetch(`${API_URL}/material/guideitems/${id}`, {
    method: 'DELETE',
    headers: createAuthHeaders(store.getState().auth.access_token),
  })
    .then(handleErrorIfAny);
};
