
import {COURSE_FETCH, COURSE_RECEIVE, USER_COURSES_FETCH, USER_COURSES_RECEIVE} from './index';
import {getAllOwnCourses, getCourseById} from '../requests/courses';

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

export const getCourseByIdAction = (courseId) => (dispatch) => {
  dispatch({
    type: COURSE_FETCH
  });

  return getCourseById(courseId)
    .then(response => dispatch({
      type: COURSE_RECEIVE,
      payload: response,
    }));
};
