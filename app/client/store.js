import {createStore, compose} from 'redux';
import rootReducer from './reducers/index';

import fields from './data/fields';
import units from './data/units';
import contents from "./data/contents";

// create an object for the default data
const defaultState = {
  fields,
  units,
  contents,
};

const store = createStore(rootReducer, defaultState);

export default store;
