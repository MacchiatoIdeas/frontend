import {SUBJECT_RECEIVE, UNIT_RECEIVE} from '../actions/index';

const units = (state = {}, action) => {
  switch (action.type) {
    case SUBJECT_RECEIVE:
      return {...state, ...action.payload.entities.units};
    case UNIT_RECEIVE:
      return {...state, ...action.payload.entities.units};
  }
  return state;
};

export default units;
