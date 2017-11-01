import {normalize} from 'normalizr';

import {API_URL} from '../api';
import {GUIDE_FETCH, GUIDE_ITEM_RECEIVE, GUIDE_ITEM_SEND, GUIDE_RECEIVE, GUIDE_SEND} from './index';
import {getOwnDataAction} from './auth';
import {createGuide, getGuideById} from '../requests/guides';

export const getGuideByIdAction = (guideId) => (dispatch) => {
  dispatch({
    type: GUIDE_FETCH
  });

  return getGuideById(guideId)
    .then(response => dispatch({
      type: GUIDE_RECEIVE,
      payload: response,
    }));
};

export const createGuideAction = (...args) => (dispatch) => {
  dispatch({
    type: GUIDE_SEND
  });

  return createGuide(...args);
};

export const updateGuide = (token, id, guide) => (dispatch) => {
  dispatch({
    type: GUIDE_ITEM_SEND,
  });

  return fetch(`${API_URL}/material/guides/${id}/`, {
    method: 'PUT',
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
      console.log('response', response);

      return dispatch({
        type: GUIDE_RECEIVE,
        payload: normalize(response, guide)
      });
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
      console.log('response', response);

      return dispatch(getGuideById(response.guide));
    });
};
