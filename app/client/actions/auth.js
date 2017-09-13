import fetch from 'isomorphic-fetch';

import {API_URL} from '../api';

export const getUserData = (token) => (dispatch, getState) => {
  if (getState().auth.user) {
    return;
  }

  dispatch({
    type: 'AUTH_USERDATA_REQUEST'
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
  type: 'AUTH_USERDATA_SUCCESS',
  payload: data
});

export const sendLogin = (username, password) => (dispatch) => {
  dispatch({
    type: 'AUTH_LOGIN_REQUEST'
  });
  return fetch(`${API_URL}/o/token/`, {
    method: 'POST',
    body: `grant_type=password&username=${username}&password=${password}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic am9vdWNYQU1kaTZZNHpaUzhmWmx3VU9nUFFlUHZXaE1sVVAxQXFkaDpEd1AySDJwNUJMSGV1MWpycGJYU0NrYmNSeHJlSEM3R0xNMDlSTkxrYUxHUjlqN3ZkRHNmTnVvYVRNN0NVOHJjODhUaGVWdTNGMmp1Y2k4Z202WXk4UXNxc2ZFTXV6dGVNWmJ3dGtLWlloMnNER2Q3RE51T21tT0U0NTI3aXQxRw=='
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
  type: 'AUTH_LOGIN_SUCCESS',
  payload: data
});
