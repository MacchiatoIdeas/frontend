import {API_URL, addAuthHeaders} from './utils';

export const getAllSubjects = () => {
  return fetch(`${API_URL}/material/subjects/`)
    .then(
      response => response.json(),
      error => console.log(error)
    );
};

export const getSubjectById = (id) => {
  return fetch(`${API_URL}/material/subjects/${id}/`)
    .then(
      response => response.json(),
      error => console.log(error)
    );
};
