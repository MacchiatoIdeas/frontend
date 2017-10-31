import {DOCUMENT_COMMENT_RECEIVE, DOCUMENT_FETCH, DOCUMENT_RECEIVE} from '../actions/index';

export const visibleDocument = (state = {
  isLoading: true,
}, action) => {
  switch (action.type) {
    case DOCUMENT_FETCH:
      return {isLoading: true};
    case DOCUMENT_RECEIVE:
      return {...action.payload, isLoading: false};
    case DOCUMENT_COMMENT_RECEIVE:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      }
  }
  return state;
};
