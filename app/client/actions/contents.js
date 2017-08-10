import fetch from 'isomorphic-fetch';

export function fetchContent(index) {
  return (dispatch) => {
    dispatch({
      type: 'CONTENT_FETCH'
    });

    return fetch(`http://localhost:8000/material/content/${index}`)
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(content => {
        dispatch(receiveContent(content));
      })
  }
}

export function receiveContent(content) {
  return {
    type: 'CONTENT_RECEIVE',
    payload: content
  }
}
