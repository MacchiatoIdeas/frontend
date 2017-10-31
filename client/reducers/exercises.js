import {EXERCISE_RECEIVE, EXERCISE_FETCH, EXERCISE_COMMENT_RECEIVE} from '../actions/index';

export const visibleExercise = (state = {
  isLoading: true,
}, action) => {
  switch (action.type) {
    case EXERCISE_FETCH:
      return {isLoading: true};
    case EXERCISE_RECEIVE:
      return {...action.payload, isLoading: false};
    case EXERCISE_COMMENT_RECEIVE:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      }
  }
  return state;
};
