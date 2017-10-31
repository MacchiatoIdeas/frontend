import {API_URL, createAuthHeaders} from './utils';

import store from '../store';

export const getExerciseById = (exerciseId) => {
  return fetch(`${API_URL}/exercises/exercises/${exerciseId}`)
    .then(
      response => response.json(),
      error => console.log(error)
    );
};

export const createExerciseComment = (exerciseId, text) => {
  return fetch(`${API_URL}/exercises/comments/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: JSON.stringify({
      exercise: exerciseId,
      text,
    }),
  })
    .then(
      response => response.json(),
      error => console.log(error)
    );
};

export const createExerciseAnswer = (exerciseId, answer) => {
  return fetch(`${API_URL}/exercises/answers/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: JSON.stringify({
      exercise: exerciseId,
      answer,
    }),
  })
    .then(
      response => response.json(),
      error => console.log(error)
    );
};
