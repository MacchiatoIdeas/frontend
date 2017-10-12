import fetch from 'isomorphic-fetch';
import {normalize} from 'normalizr';

import {API_URL} from '../api';
import {guide} from '../schema';
import {GUIDE_FETCH, GUIDE_ITEM_RECEIVE, GUIDE_ITEM_SEND, GUIDE_RECEIVE, GUIDE_SEND} from './index';
import {getUserData} from './auth';

export const getGuideById = (id) => (dispatch) => {
  dispatch({
    type: GUIDE_FETCH
  });

  return fetch(`${API_URL}/material/guides/${id}/`)
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(response => dispatch({
      type: GUIDE_RECEIVE,
      payload: normalize(response, guide)
    }));
};

export const sendGuide = (token, guide) => (dispatch) => {
  dispatch({
    type: GUIDE_SEND
  });

  return fetch(`${API_URL}/material/guides/`, {
    method: 'POST',
    body: JSON.stringify(guide),
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  })
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(response => {
      dispatch(getUserData(token));

      return dispatch({
        type: GUIDE_RECEIVE,
        payload: normalize(response, guide)
      })
    });
};

export const sendGuideItem = (token, item) => (dispatch) => {
  dispatch({
    type: GUIDE_ITEM_SEND,
  });

  return fetch(`${API_URL}/material/guideitems/`, {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  })
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(response => {
      return dispatch(getGuideById(response.guide));
    });
};
