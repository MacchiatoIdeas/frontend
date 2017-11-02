import {API_URL, createAuthHeaders, handleErrorIfAny} from './utils';

import store from '../store';

export const getExerciseById = (exerciseId) => {
  return fetch(`${API_URL}/exercises/exercises/${exerciseId}`)
    .then(handleErrorIfAny);
};

export const createExercise = (unitId, description, difficulty, content, text, right_answer) => {
  console.log(JSON.stringify({
    unit: unitId,
    briefing: description,
    difficulty,
    content,
    text,
    right_answer,
  }));

  return fetch(`${API_URL}/exercises/exercises/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: JSON.stringify({
      unit: unitId,
      briefing: description,
      difficulty,
      content,
      text,
      right_answer,
    }),
  })
    .then(handleErrorIfAny);
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
    .then(handleErrorIfAny);
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
    .then(handleErrorIfAny);
};

export const getAnswerById = (answerId) => {
  return fetch(`${API_URL}/exercises/answers/${answerId}/`, {
    headers: createAuthHeaders(store.getState().auth.access_token),
  })
    .then(handleErrorIfAny);
};

export const sendAnswer = (exerciseId, answer) => {
  return fetch(`${API_URL}/exercises/answers/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: JSON.stringify({
      exercise: exerciseId,
      answer,
    }),
  })
    .then(handleErrorIfAny);
};

export const getPreviousAnswer = (exerciseId) => {
  return fetch(`${API_URL}/exercises/myanswers/${exerciseId}`, {
    headers: createAuthHeaders(store.getState().auth.access_token),
  })
    .then(handleErrorIfAny);
};
