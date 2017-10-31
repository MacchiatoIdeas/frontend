import fetch from 'isomorphic-fetch';
import {normalize} from 'normalizr';

import {API_URL} from '../api';
import {SUBJECT_FETCH, SUBJECT_LIST_FETCH, SUBJECT_LIST_RECEIVE, SUBJECT_RECEIVE} from './index';
import {getAllSubjects, getSubjectById} from '../requests/subjects';

export const getAllSubjectsAction = () => (dispatch) => {
  dispatch({
    type: SUBJECT_LIST_FETCH,
  });

  return getAllSubjects()
    .then(response => dispatch({
      type: SUBJECT_LIST_RECEIVE,
      payload: response,
    }));
};

export const getSubjectByIdAction = (subjectId) => (dispatch) => {
  dispatch({
    type: SUBJECT_FETCH
  });

  return getSubjectById(subjectId)
    .then(response => dispatch({
      type: SUBJECT_RECEIVE,
      payload: response,
    }));
};
