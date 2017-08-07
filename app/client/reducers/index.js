import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import fields from './fields';
import units from './units';
import subUnits from './units';
import contents from "./contents";

const rootReducer = combineReducers({
  fields,
  units,
  subUnits,
  contents,
  routing: routerReducer
});

export default rootReducer;
