import {SUBJECT_RECEIVE, UNIT_RECEIVE, CONTENT_RECEIVE} from '../actions/index';

const units = (state = {}, action) => {
  switch (action.type) {
    case SUBJECT_RECEIVE:
    case UNIT_RECEIVE:
    case CONTENT_RECEIVE:
      return {...state, ...action.payload.entities.units};
  }
  return state;
};

export default units;
