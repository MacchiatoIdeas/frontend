export default (state = {}, action) => {
  switch (action.type) {
    case 'UNIT_RECEIVE_ONE':
      return {...state, ...action.payload.entities.authors};
  }
  return state;
}
