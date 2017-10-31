import {API_URL, createAuthHeaders, handleErrorIfAny} from './utils';
import store from '../store';

export const getOwnData = () => {
  return fetch(`${API_URL}/users/1/`, {
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
      'Authorization': 'Basic VTRSZlhtMkpnRFRQYmZmWmNUblVDV0tMUU90emNEdUQ4T3dvTFRrYTpGM0M3eWtWMElTbUNHYlZxVVJQUzJWckNMSXd3a2lkSFVabHRNYnFFa3lrcjNxUVoyMFh4VXhQaHV5c0ZQMHBsakNwclNpdkxXQ243WlZPNllaZDlDeFNJRzJaZEhEMnNYWDJ5OEdBbGp5aVF0YUJUU21tTXpkRmNqZHk1UkZDaQ=='
    }
  })
    .then(handleErrorIfAny);
};
