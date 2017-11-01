export const API_URL = 'http://api.macchiato.cl';
export const API_BASIC = 'NGlrc3FDOEtCV1o2V0ljdGN2d1dTSlJWa3IzRFZiZ1cyeVF1Qk9nOTp1Q1hscWw0Q0c3VkExeG5oYm1jbHN1cU1IY2tYODRnWklRS1ZtTHkwOFg3bkJ3UGV1RERkbzB1elpyZFVnclUzVmQ5enVQdVJ3TmFDMTVjbDJRSkNuOU5YZ0JvZzduSndWcmc2V2djYnZLSWNzV3dZWm9vdWJ6MmRwUUxZZkRKUg==';

export const createAuthHeaders = (access_token) => {
  return {
    'Authorization': `Bearer ${access_token}`,
    'Content-Type': 'application/json',
  }
};

export const handleErrorIfAny = (response) => {
  if (!response.ok) {
    alert(response.statusText);
    console.log(response);
    throw Error(response.statusText);
  }
  return response.json();
};
