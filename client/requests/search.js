import {API_URL, handleErrorIfAny} from './utils';

export const searchDocuments = (terms) => {
  return fetch(`${API_URL}/material/contents/?s=${terms}`)
    .then(handleErrorIfAny);
};

export const searchExercises = (terms) => {
  return fetch(`${API_URL}/exercises/exercises/?s=${terms}`)
    .then(handleErrorIfAny);
};


export const searchGuides = (terms) => {
  return fetch(`${API_URL}/material/guide/?s=${terms}`)
    .then(handleErrorIfAny);
};
