function fields(state = {}, action) {
  switch (action.type) {
    case 'FIELD_RECEIVE_LIST':
      return {...state, ...action.payload.entities.fields};
    case 'FIELD_RECEIVE_ONE':
      return {...state, ...action.payload.entities.fields};
  }

  return state;
}

export default fields;
