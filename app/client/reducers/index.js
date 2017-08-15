import {combineReducers} from 'redux';

import fields from './fields';
import units from './units';
import contents, {loadingContent} from './contents';
import authors from './authors';

const rootReducer = combineReducers({
  fields,
  units,
  contents,
  authors,
  loadingContent,
});

export default rootReducer;
