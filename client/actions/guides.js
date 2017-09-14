import fetch from 'isomorphic-fetch';
import {normalize} from 'normalizr';

import {API_URL} from '../api';
import {guide} from "../schema";
import {GUIDE_FETCH, GUIDE_RECEIVE} from "./index";

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
