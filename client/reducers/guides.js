import {GUIDE_FETCH, GUIDE_RECEIVE, USER_GUIDES_FETCH, USER_GUIDES_RECEIVE} from '../actions/index';

export const visibleGuide = (state = {
  isLoading: true
}, action) => {
  switch (action.type) {
    case GUIDE_FETCH:
      return {isLoading: true};
    case GUIDE_RECEIVE:
      return {...action.payload, isLoading: false};
  }
  return state;
};
