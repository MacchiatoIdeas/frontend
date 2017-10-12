import {UNIT_RECEIVE, CONTENT_RECEIVE, DOCUMENT_COMMENT_RECEIVE} from '../actions/index';

function contents(state = {}, action) {
  switch (action.type) {
    case UNIT_RECEIVE:
    case CONTENT_RECEIVE:
      return {...state, ...action.payload.entities.contents};
    case DOCUMENT_COMMENT_RECEIVE:
      // TODO: change this!!!
      let content = state[action.payload.content] ;
      let comments = content.comments;
      comments = [...comments, action.payload];
      content = {...content, comments: comments};
      return {...state, [content.id]: content};
  }
  return state;
}

export default contents;
