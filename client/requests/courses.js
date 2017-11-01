import {API_URL, createAuthHeaders, handleErrorIfAny} from './utils';

import store from '../store';

export const getAllOwnCourses = () => {
  return fetch(`${API_URL}/courses/courses/`, {
    headers: createAuthHeaders(store.getState().auth.access_token)
  })
    .then(handleErrorIfAny);
};
