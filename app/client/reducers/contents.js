export function loadingContent(state = false, action) {
  switch (action.type) {
    case 'CONTENT_FETCH':
      return true;
    case 'CONTENT_RECEIVE':
      return false;
  }
  return state;
}

function contents(state = [], action) {
  switch (action.type) {
    case 'CONTENT_RECEIVE':
      const obj = state[1];

      return {
        ...state,
        1: action.payload
      };
  }
  return state;
}

export default contents;
