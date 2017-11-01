
import {USER_COURSES_FETCH, USER_COURSES_RECEIVE} from './index';
import {getAllOwnCourses} from '../requests/courses';

export const getAllOwnCoursesAction = () => (dispatch) => {
  dispatch({
    type: USER_COURSES_FETCH
  });

  return getAllOwnCourses()
    .then(response => dispatch({
      type: USER_COURSES_RECEIVE,
      payload: response,
    }));
};
