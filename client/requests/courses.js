import {API_URL, createAuthHeaders, handleErrorIfAny} from './utils';

import store from '../store';

export const getAllOwnCourses = () => {
  return fetch(`${API_URL}/courses/courses/`, {
    headers: createAuthHeaders(store.getState().auth.access_token)
  })
    .then(handleErrorIfAny);
};


export const createCourse = (name) => {
  return fetch(`${API_URL}/courses/courses/`, {
    method: 'POST',
    headers: createAuthHeaders(store.getState().auth.access_token),
    body: JSON.stringify({
      name,
    })
  })
    .then(handleErrorIfAny);
};


export const getCourseById = (courseId) => {
  return fetch(`${API_URL}/courses/courses/${courseId}/`, {
    headers: createAuthHeaders(store.getState().auth.access_token)
  })
    .then(handleErrorIfAny);
};
