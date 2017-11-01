import {normalize} from 'normalizr';

import {API_URL} from '../api';
import {GUIDE_FETCH, GUIDE_ITEM_SEND, GUIDE_RECEIVE, GUIDE_SEND, USER_GUIDES_FETCH} from './index';
import {createGuide, getAllOwnGuides, getGuideById} from '../requests/guides';

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

export const getAllOwnGuidesAction = () => (dispatch) => {
  dispatch({
    type: USER_GUIDES_FETCH
  });

  return getAllOwnGuides()
    .then(response => dispatch({
      type: USER_GUIDES_FETCH,
      payload: response,
    }));
};

export const createGuideAction = (...args) => (dispatch) => {
  dispatch({
    type: GUIDE_SEND
  });

  return createGuide(...args);
};
