import {AUTH_LOGIN_RECEIVE, AUTH_USERDATA_FAILED, AUTH_USERDATA_RECEIVE} from '../actions';

export default (state = {
  isFetching: true,
  isAuthenticated: false,
}, action) => {
  switch (action.type) {
    case AUTH_LOGIN_RECEIVE:
      // just save auth data, don't actually log-in.
      localStorage.setItem('auth', JSON.stringify(action.payload));
      return {...state, ...action.payload};

    case AUTH_USERDATA_RECEIVE:
      // when user data is received, proceed with log-in.
      return {...state,
        user: action.payload.entities.users[action.payload.result],
        isAuthenticated: true,
        isFetching: false
      };

    case AUTH_USERDATA_FAILED:
      return {...state, isAuthenticated: false, isFetching: false};
  }
  return state;
}
