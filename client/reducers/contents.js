import {DOCUMENT_RECEIVE} from '../actions/index';

export const visibleDocument = (state = {
  isLoading: true,
}, action) => {
  switch (action.type) {
    case DOCUMENT_RECEIVE:
      return {...action.payload, isLoading: false};
  }
  return state;
};
