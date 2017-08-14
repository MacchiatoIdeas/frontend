function fields(state = {}, action) {
  switch (action.type) {
    case 'FIELD_RECEIVE_LIST':
      return action.payload.entities.fields;
  }

  return state;
}

export default fields;
