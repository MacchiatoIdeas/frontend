import fetch from 'isomorphic-fetch';
import {normalize} from 'normalizr';
import {subjectArray, subject} from '../schema';

import {addHeaders, API_URL} from '../api';
import {SUBJECT_FETCH, SUBJECT_RECEIVE} from './index';

export const getAllSubjects = () => (dispatch, getState) => {
  dispatch({
    type: SUBJECT_FETCH,
  });

  return fetch(`${API_URL}/material/subjects/`, addHeaders(getState()))
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(response => dispatch({
      type: SUBJECT_RECEIVE,
      payload: normalize(response, subjectArray)
    }))
};

export const getSubjectById = (id) => (dispatch, getState) => {
  dispatch({
    type: SUBJECT_FETCH
  });

  return fetch(`${API_URL}/material/subjects/${id}/`)
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(response => dispatch({
      type: SUBJECT_RECEIVE,
      payload: normalize(response, subject)
    }));
};
