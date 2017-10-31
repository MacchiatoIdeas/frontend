import {UNIT_RECEIVE} from '../actions/index';

export const visibleUnit = (state = {
  isLoading: true
}, action) => {
  switch (action.type) {
    case UNIT_RECEIVE:
      return {...action.payload, isLoading: false};
  }

  return state;
};
