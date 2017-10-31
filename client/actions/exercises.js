import {
  EXERCISE_COMMENT_RECEIVE, EXERCISE_COMMENT_SEND, EXERCISE_FETCH, EXERCISE_RECEIVE
} from './index';
import {exercise} from '../schema';
import {API_URL} from '../api';
import {normalize} from 'normalizr';
import {createExerciseComment, getExerciseById} from '../requests/exercises';

export const getExerciseByIdAction = (exerciseId) => (dispatch) => {
  dispatch({
    type: EXERCISE_FETCH
  });

  return getExerciseById(exerciseId)
    .then(response => dispatch({
      type: EXERCISE_RECEIVE,
      payload: response,
    }));
};

export const createExerciseCommentAction = (exerciseId, text) => (dispatch) => {
  dispatch({
    type: EXERCISE_COMMENT_SEND,
  });

  return createExerciseComment(exerciseId, text)
    .then(data => dispatch({
      type: EXERCISE_COMMENT_RECEIVE,
      payload: data,
    }));
};
