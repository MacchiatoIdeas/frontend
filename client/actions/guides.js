import {GUIDE_FETCH, GUIDE_RECEIVE, USER_GUIDES_FETCH, USER_GUIDES_RECEIVE} from './index';
import {getAllOwnGuides, getGuideById} from '../requests/guides';

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
      type: USER_GUIDES_RECEIVE,
      payload: response,
    }));
};
