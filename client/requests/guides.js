import {API_URL, createAuthHeaders} from './utils';

import store from '../store';

export const getAllOwnGuides = () => {
  return fetch(`${API_URL}/material/guides?byuser=me`)
    .then(
      response => response.json(),
      error => console.log(error)
    );
};

export const getGuideById = (guideId) => {
  return fetch(`${API_URL}/material/guides/${guideId}`)
    .then(
      response => response.json(),
      error => console.log(error)
    );
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
    .then(
      response => response.json(),
      error => console.log(error)
    );
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
    .then(
      response => response.json(),
      error => console.log(error)
    );
};

export const deleteItemFromGuide = (id) => {
  return fetch(`${API_URL}/material/guideitems/${id}`, {
    method: 'DELETE',
    headers: createAuthHeaders(store.getState().auth.access_token),
  })
    .then(
      response => response.json(),
      error => console.log(error)
    );
};
