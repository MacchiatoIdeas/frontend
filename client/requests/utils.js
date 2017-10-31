export const API_URL = 'http://api.macchiato.cl';

export const createAuthHeaders = (access_token) => {
  return {
    'Authorization': `Bearer ${access_token}`,
    'Content-Type': 'application/json',
  }
};

export const handleErrorIfAny = (response) => {
  if (!response.ok) {
    alert(response.statusText);
    throw Error(response.statusText);
  }
  return response.json();
};
