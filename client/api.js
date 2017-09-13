export const API_URL = 'http://api.macchiato.cl';

export const addHeaders = (state) => {
  return {
    headers: {
      'Authorization': `Bearer ${state.auth.access_token}`
    }
  }
};
