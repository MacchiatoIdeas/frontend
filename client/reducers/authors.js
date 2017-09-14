import {UNIT_RECEIVE, SUBJECT_RECEIVE} from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case SUBJECT_RECEIVE:
    case UNIT_RECEIVE:
      return {...state, ...action.payload.entities.authors};
  }
  return state;
}
