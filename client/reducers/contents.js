import {UNIT_RECEIVE, CONTENT_RECEIVE} from '../actions/index';

function contents(state = {}, action) {
  switch (action.type) {
    case UNIT_RECEIVE:
    case CONTENT_RECEIVE:
      return {...state, ...action.payload.entities.contents};
  }
  return state;
}

export default contents;
