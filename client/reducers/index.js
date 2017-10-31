import {combineReducers} from 'redux';

import {subjects, visibleSubject} from './subjects';
import {visibleUnit} from './units';
import {visibleDocument} from './documents';
import exercises from './exercises';
import authors from './authors';
import auth from './auth';
import guides from './guides';

const rootReducer = combineReducers({
  subjects, visibleSubject,
  visibleUnit,
  visibleDocument,

  exercises,
  authors,
  auth,
  guides,
});

export default rootReducer;
