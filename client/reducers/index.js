import {combineReducers} from 'redux';

import fields from './fields';
import units from './units';
import contents, {loadingContent} from './contents';
import authors from './authors';
import auth from './auth';

const rootReducer = combineReducers({
  fields,
  units,
  contents,
  authors,
  auth,
  loadingContent,
});

export default rootReducer;
