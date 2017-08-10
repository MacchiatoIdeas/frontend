import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

import fields from './data/fields';
import units from './data/units';
import contents from "./data/contents";

// create an object for the default data
const defaultState = {
  fields,
  units,
  contents,
  loadingContent: {
    status: false
  }
};

function addLoggerToStore(store) {
  const rawDispatch = store.dispatch;
  return action => {
    console.group(action.type);
    console.log('action', action);
    console.groupEnd(action.type);
    return rawDispatch(action);
  };
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;
