import {UNIT_RECEIVE, EXERCISE_RECEIVE, EXERCISE_COMMENT_RECEIVE} from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case UNIT_RECEIVE:
    case EXERCISE_RECEIVE:
      return {...state, ...action.payload.entities.exercises};
    case EXERCISE_COMMENT_RECEIVE:
      // TODO: change this!!!
      let exercise = state[action.payload.exercise] ;
      let comments = exercise.comments;
      comments = [...comments, action.payload];
      exercise = {...exercise, comments: comments};
      return {...state, [exercise.id]: exercise};
  }
  return state;
}
