import {SUBJECT_RECEIVE, UNIT_RECEIVE, CONTENT_RECEIVE, SUBJECT_LIST_RECEIVE, SUBJECT_FETCH} from '../actions/index';

export const subjects = (state = {}, action) => {
  switch (action.type) {
    case SUBJECT_LIST_RECEIVE:
      return {...state, ...action.payload};
  }

  return state;
};

export const visibleSubject = (state = {
  isLoading: true
}, action) => {
  switch (action.type) {
    case SUBJECT_FETCH:
      return {isLoading: true};
    case SUBJECT_RECEIVE:
      return {...action.payload, isLoading: false};
  }

  return state;
};
