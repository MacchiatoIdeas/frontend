import {API_URL, createAuthHeaders, handleErrorIfAny} from './utils';

import store from '../store';

export const getAllOwnImages = () => {
  return fetch(`${API_URL}/gallery/`, {
    headers: createAuthHeaders(store.getState().auth.access_token),
  })
    .then(handleErrorIfAny);
};

export const sendImage = (file) => {
  const formData = new FormData();
  formData.append('image', file);

  return fetch(`${API_URL}/gallery/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${store.getState().auth.access_token}`,
    },
    body: formData
  })
    .then(handleErrorIfAny);
};
