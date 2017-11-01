import {API_BASIC, API_URL, createAuthHeaders, handleErrorIfAny} from './utils';
import store from '../store';

export const getOwnData = () => {
  return fetch(`${API_URL}/users/me/`, {
    headers: createAuthHeaders(store.getState().auth.access_token)
  })
    .then(
      response => response.json(),
      error => console.log(error)
    );
};

export const tryLogin = (username, password) => {
  return fetch(`${API_URL}/o/token/`, {
    method: 'POST',
    body: `grant_type=password&username=${username}&password=${password}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${API_BASIC}`
    }
  })
    .then(handleErrorIfAny);
};
