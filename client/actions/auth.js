import {
  AUTH_LOGIN_FETCH, AUTH_LOGIN_RECEIVE, AUTH_USERDATA_FAILED, AUTH_USERDATA_FETCH,
  AUTH_USERDATA_RECEIVE
} from './index';
import {getOwnData, tryLogin} from '../requests/auth';
import {getAllOwnGuides} from '../requests/guides';
import {getAllOwnGuidesAction} from './guides';
import {getAllOwnCoursesAction} from './courses';

export const getOwnDataAction = () => (dispatch) => {
  dispatch({
    type: AUTH_USERDATA_FETCH
  });

  return getOwnData()
    .then(data => {
      dispatch({
        type: AUTH_USERDATA_RECEIVE,
        payload: data,
      });
    }).then(response => {
      // get remaining user data from other endpoints.
      dispatch(getAllOwnGuidesAction());
      dispatch(getAllOwnCoursesAction());
    });
};

export const tryLoginAction = (username, password) => (dispatch) => {
  dispatch({
    type: AUTH_LOGIN_FETCH
  });
  return tryLogin(username, password)
    .then(response => {
      dispatch({
        type: AUTH_LOGIN_RECEIVE,
        payload: response
      });

      dispatch(getOwnDataAction());
    });
};

export const loadFromLocalStorage = () => (dispatch) => {
  const authJSON = localStorage.getItem('auth');

  if (authJSON !== null) {
    const auth = JSON.parse(authJSON);

    dispatch({
      type: AUTH_LOGIN_RECEIVE,
      payload: auth
    });

    dispatch(getOwnDataAction(auth.access_token));
  } else {
    dispatch({
      type: AUTH_USERDATA_FAILED,
    });
  }
};
