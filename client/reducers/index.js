import {combineReducers} from 'redux';

import subjects from './subjects';
import units from './units';
import contents from './contents';
import exercises from './exercises';
import authors from './authors';
import auth from './auth';
import guides from './guides';

const rootReducer = combineReducers({
  subjects,
  units,
  contents,
  exercises,
  authors,
  auth,
  guides,
});

export default rootReducer;
