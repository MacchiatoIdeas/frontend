import {SUBJECT_RECEIVE} from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case SUBJECT_RECEIVE:
      return {...state, ...action.payload.entities.subjects};
  }

  return state;
}
