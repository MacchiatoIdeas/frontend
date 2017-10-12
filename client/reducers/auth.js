import {AUTH_LOGIN_RECEIVE, AUTH_USERDATA_FAILED, AUTH_USERDATA_RECEIVE} from '../actions';

export default (state = {
}, action) => {
  switch (action.type) {
    case AUTH_LOGIN_RECEIVE:
      localStorage.setItem('auth', JSON.stringify(action.payload));
      return {...action.payload};
    case AUTH_USERDATA_RECEIVE:
      console.log(1);
      return {...state, user: action.payload, isAuthenticated: true};
    case AUTH_USERDATA_FAILED:
      return {...state, isAuthenticated: false};
  }
  return state;
}
