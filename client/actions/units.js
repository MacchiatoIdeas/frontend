import {UNIT_FETCH, UNIT_RECEIVE} from './index';
import {getUnitById} from '../requests/units';

export const getUnitByIdAction = (unitId) => (dispatch) => {
  dispatch({
    type: UNIT_FETCH,
  });

  return getUnitById(unitId)
    .then(response => dispatch({
      type: UNIT_RECEIVE,
      payload: response
    }));
};
