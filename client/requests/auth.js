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

export const registerStudent = (firstName, lastName, email, birthDate, institution, password, profilePicture) => {
  const formData = new FormData();
  formData.append('first_name', firstName);
  formData.append('last_name', lastName);
  formData.append('avatar', profilePicture);
  formData.append('birth_date', birthDate);
  formData.append('email', email);
  formData.append('institution', institution);
  formData.append('password', password);

  return fetch(`${API_URL}/users/students/register/`, {
    method: 'POST',
    body: formData
  })
    .then(handleErrorIfAny);
};

export const registerTeacher = (firstName, lastName, email, birthDate, institution,
                                password, profilePicture, curriculum, rut, bio) => {
  const formData = new FormData();
  formData.append('first_name', firstName);
  formData.append('last_name', lastName);
  formData.append('password', password);
  formData.append('email', email);
  formData.append('institution', institution);
  formData.append('birth_date', birthDate);
  formData.append('avatar', profilePicture);
  formData.append('curriculum', curriculum);
  formData.append('rut', rut);
  formData.append('bio', bio);

  return fetch(`${API_URL}/users/teachers/register/`, {
    method: 'POST',
    body: formData
  })
    .then(handleErrorIfAny);
};
