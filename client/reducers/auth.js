import {AUTH_LOGIN_RECEIVE, AUTH_USERDATA_FAILED, AUTH_USERDATA_RECEIVE} from '../actions';

export default (state = {
  isLoading: true,
  isAuthenticated: false,
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
        user: action.payload,
        isAuthenticated: true,
        isLoading: false
      };

    case AUTH_USERDATA_FAILED:
      return {...state, isAuthenticated: false, isLoading: false};
  }
  return state;
}
