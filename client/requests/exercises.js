import {API_URL} from './utils';

export const getExerciseById = (exerciseId) => {
  return fetch(`${API_URL}/exercises/exercises/${exerciseId}`)
    .then(
      response => response.json(),
      error => console.log(error)
    );
};


export const sendExerciseComment = (exerciseId, text) => {
  return fetch(`${API_URL}/exercises/comments/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: {
      exercise: exerciseId,
      text,
    },
  })
    .then(
      response => response.json(),
      error => console.log(error)
    );
};
