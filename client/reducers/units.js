const units = (state = {}, action) => {
  switch (action.type) {
    case 'FIELD_RECEIVE_ONE':
      return {...state, ...action.payload.entities.units};
    case 'UNIT_RECEIVE_ONE':
      return {...state, ...action.payload.entities.units};
  }
  return state;
}

export default units;
