import {AUTH_LOGIN_RECEIVE, AUTH_USERDATA_RECEIVE} from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_LOGIN_RECEIVE:
      return {...action.payload};
    case AUTH_USERDATA_RECEIVE:
      return {...state, user: action.payload};
  }
  return state;
}
