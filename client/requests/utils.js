export const API_URL = 'http://127.0.0.1:7000';
export const API_BASIC = 'TVF5MEhiV1pNQkhJZFZFNWsxNjZKeUg1YUVKeGJ2eUR3N2ZKVzRiUDo3RVQ4NzZDZThtaFZ5Z0RjaXc1TXVsVUplU2J3ZkxNYTdFbDJpNU9oN2lWakRRWng5c3lRcGJKYkxWZkpXY3g1SXNaTWxENFBlTUlQNXNkMndWdVNLeHI3WmpvbE5PaDdnU1NDdlgycVpkNXV4WkpBbEo5N1owQTR6VnFVQXp6Nw==';

export const createAuthHeaders = (access_token) => {
  return {
    'Authorization': `Bearer ${access_token}`,
    'Content-Type': 'application/json',
  }
};

export const handleErrorIfAny = (response) => {
  if (!response.ok) {
    alert(response.statusText);
    response.text().then(response => console.log(response));
    throw Error(response.statusText);
  }
  return response.json();
};
