import {
  DOCUMENT_COMMENT_RECEIVE, DOCUMENT_FETCH, DOCUMENT_RECEIVE, DOCUMENT_UPDATE_RECEIVE,
  DOCUMENT_UPDATE_SEND
} from '../actions/index';

export const visibleDocument = (state = {
  isLoading: true,
  isUpdating: false,
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
      };
    case DOCUMENT_UPDATE_SEND:
      return {
        ...state,
        isUpdating: true,
      };
    case DOCUMENT_UPDATE_RECEIVE:
      return {
        ...state,
        ...action.payload,
        isUpdating: false,
      };
  }
  return state;
};
