export function loadingContent(state = false, action) {
  switch (action.type) {
    case 'CONTENT_FETCH':
      return true;
    case 'CONTENT_RECEIVE':
      return false;
  }
  return state;
}

function contents(state = {}, action) {
  switch (action.type) {
    case 'UNIT_RECEIVE_ONE':
      return {...state, ...action.payload.entities.contents};
  }
  return state;
}

export default contents;
