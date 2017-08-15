import {combineReducers} from 'redux';

import fields from './fields';
import units from './units';
import contents, {loadingContent} from './contents';

const rootReducer = combineReducers({
  fields,
  units,
  contents,
  loadingContent,
});

export default rootReducer;
