import {API_URL, addAuthHeaders, handleErrorIfAny} from './utils';

export const getAllSubjects = () => {
  return fetch(`${API_URL}/material/subjects/`)
    .then(handleErrorIfAny);
};

export const getSubjectById = (id) => {
  return fetch(`${API_URL}/material/subjects/${id}/`)
    .then(handleErrorIfAny);
};
