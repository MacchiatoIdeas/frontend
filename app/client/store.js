import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

import fields from './data/fields';
import units from './data/units';
import contents from "./data/contents";

// create an object for the default data
const defaultState = {
  fields: undefined,
  units,
  contents,
  loadingContent: false,
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;
