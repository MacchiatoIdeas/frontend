import {AUTH_LOGIN_RECEIVE, AUTH_USERDATA_FAILED, AUTH_USERDATA_RECEIVE} from '../actions';
import {USER_COURSES_RECEIVE, USER_GUIDES_RECEIVE} from '../actions/index';

export const auth = (state = {
  isLoading: true,
  isAuthenticated: false,
  guides: {
    isLoading: true,
    all: []
  },
  courses: {
    isLoading: true,
    all: []
  }
}, action) => {
  switch (action.type) {
    case AUTH_LOGIN_RECEIVE:
      // just save auth data, don't actually log-in.
      localStorage.setItem('auth', JSON.stringify(action.payload));
      return {...state, ...action.payload};

    case AUTH_USERDATA_RECEIVE:
      // when user data is received, proceed with log-in.
      return {
        ...state,
        data: action.payload,
        isAuthenticated: true,
        isLoading: false
      };

    case AUTH_USERDATA_FAILED:
      return {...state, isAuthenticated: false, isLoading: false};

    case USER_GUIDES_RECEIVE:
      return {
        ...state,
        guides: {
          isLoading: false,
          all: action.payload
        }
      };

    case USER_COURSES_RECEIVE:
      return {
        ...state,
        courses: {
          isLoading: false,
          all: action.payload
        }
      };
  }
  return state;
};
