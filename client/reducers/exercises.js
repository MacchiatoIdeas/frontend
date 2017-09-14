import {UNIT_RECEIVE, EXERCISE_RECEIVE} from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case UNIT_RECEIVE:
    case EXERCISE_RECEIVE:
      return {...state, ...action.payload.entities.exercises};
  }
  return state;
}
