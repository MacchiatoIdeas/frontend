import {
  EXERCISE_COMMENT_RECEIVE, EXERCISE_COMMENT_SEND, EXERCISE_FETCH, EXERCISE_RECEIVE
} from './index';
import {exercise} from '../schema';
import {API_URL} from '../api';
import {normalize} from 'normalizr';

export const getExerciseById = (id) => (dispatch) => {
  dispatch({
    type: EXERCISE_FETCH
  });

  return fetch(`${API_URL}/exercises/exercises/${id}/`)
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(response => dispatch({
      type: EXERCISE_RECEIVE,
      payload: normalize(response, exercise)
    }));
};

export const sendExerciseComment = (token, comment) => (dispatch) => {
  dispatch({
    type: EXERCISE_COMMENT_SEND,
  });

  return fetch(`${API_URL}/exercises/comments/`, {
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
        type: EXERCISE_COMMENT_RECEIVE,
        payload: data,
      });
    });
};
