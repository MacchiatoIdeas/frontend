export default (state = {}, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN_SUCCESS':
      return {...action.payload};
    case 'AUTH_USERDATA_SUCCESS':
      return {...state, user: action.payload};
  }
  return state;
}
