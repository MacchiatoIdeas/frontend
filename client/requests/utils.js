export const API_URL = 'http://api.macchiato.cl';

export const createAuthHeaders = (access_token) => {
  return {
    'Authorization': `Bearer ${access_token}`,
    'Content-Type': 'application/json',
  }
};
