export const API_URL = 'http://api.macchiato.cl';
export const API_BASIC = 'NXNTUUdFeFJ6dE1nUk4ySkRRZ01xbkpIV0JvWnZOSmRka2JOMDVxQzpiSUVDZVpZMGQyU0NEcnhDaVA5MjVYSlRrNzFqdUF5UE9Za0tleFg3eGw3aDh3Y1loRkh6R0ZxVVlHbWdkdmViMjZoSHV1Rk1oMVE4cHA4eDdDRHNnRmRqRzVxTXFneDd0V0R4OGxFcGdwUkM3akxscks0WW1VOWQ4RFZlNkZndw==';

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
