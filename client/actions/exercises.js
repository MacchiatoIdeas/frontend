import {EXERCISE_FETCH, EXERCISE_RECEIVE} from "./index";
import {exercise} from "../schema";
import {API_URL} from "../api";
import {normalize} from "normalizr";

export const getExerciseById = (id) => (dispatch) => {
  dispatch({
    type: EXERCISE_FETCH
  });

  return fetch(`${API_URL}/exercises/${id}/`)
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(response => dispatch({
      type: EXERCISE_RECEIVE,
      payload: normalize(response, exercise)
    }));
};
