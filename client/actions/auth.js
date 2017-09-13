import fetch from 'isomorphic-fetch';

import {API_URL} from '../api';
import {AUTH_LOGIN_FETCH, AUTH_LOGIN_RECEIVE, AUTH_USERDATA_FETCH, AUTH_USERDATA_RECEIVE} from './index';

export const getUserData = (token) => (dispatch, getState) => {
  if (getState().auth.user) {
    return;
  }

  dispatch({
    type: AUTH_USERDATA_FETCH
  });
  return fetch(`${API_URL}/users/1/`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(data => {
      dispatch(receiveUserData(data));
    })
};

export const receiveUserData = (data) => ({
  type: AUTH_USERDATA_RECEIVE,
  payload: data
});

export const sendLogin = (username, password) => (dispatch) => {
  dispatch({
    type: AUTH_LOGIN_FETCH
  });
  return fetch(`${API_URL}/o/token/`, {
    method: 'POST',
    body: `grant_type=password&username=${username}&password=${password}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic TjYxbVZSSnU1UXM0NGJ4VmZ5Tlp1TkZ4TUNXMDI4MDVDVVFzamQ3QjplRzFqSGJIcm56RUxpSjN3R0t0anBFWDcxZkxSTFhTVGxmRXV6OFFXSWxrYW1FY21iTkJnTjNrQ1AxOFlGYzd2OUVnR0s5M3dPMTRiUUVYRDVaZkdTMjVkVlZrMUVvcDV1SGoyblNTQWUza1V4ODRBNjd6N01xOXNTcmdrZGhPMw=='
    }
  })
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(data => {
      dispatch(receiveLogin(data));
    })
};

export const receiveLogin = (data) => ({
  type: AUTH_LOGIN_RECEIVE,
  payload: data
});
