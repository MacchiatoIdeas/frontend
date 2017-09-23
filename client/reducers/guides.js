import {SUBJECT_RECEIVE, GUIDE_RECEIVE} from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case SUBJECT_RECEIVE:
    case GUIDE_RECEIVE:
      return {...state, ...action.payload.entities.guides};
  }
  return state;
}
