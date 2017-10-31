import {DOCUMENT_COMMENT_RECEIVE, DOCUMENT_RECEIVE} from '../actions/index';

export const visibleDocument = (state = {
  isLoading: true,
}, action) => {
  switch (action.type) {
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
