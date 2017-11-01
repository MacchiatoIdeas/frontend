import {COURSE_FETCH, COURSE_RECEIVE} from '../actions/index';

export const visibleCourse = (state = {
  isLoading: true,
}, action) => {
  switch (action.type) {
    case COURSE_FETCH:
      return {isLoading: true};
    case COURSE_RECEIVE:
      return {...action.payload, isLoading: false};
  }

  return state;
};
