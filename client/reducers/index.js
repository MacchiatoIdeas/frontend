import {combineReducers} from 'redux';

import subjects from './subjects';
import units from './units';
import contents from './contents';
import authors from './authors';
import auth from './auth';

const rootReducer = combineReducers({
  subjects,
  units,
  contents,
  authors,
  auth,
});

export default rootReducer;
