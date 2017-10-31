import {UNIT_FETCH, UNIT_RECEIVE} from '../actions/index';

export const visibleUnit = (state = {
  isLoading: true
}, action) => {
  switch (action.type) {
    case UNIT_FETCH:
      return {isLoading: true};
    case UNIT_RECEIVE:
      return {...action.payload, isLoading: false};
  }

  return state;
};
