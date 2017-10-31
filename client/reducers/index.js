import {combineReducers} from 'redux';

import {subjects, visibleSubject} from './subjects';
import {visibleUnit} from './units';
import {visibleDocument} from './documents';
import {visibleExercise} from './exercises';
import authors from './authors';
import auth from './auth';
import guides from './guides';

const rootReducer = combineReducers({
  subjects, visibleSubject,
  visibleUnit,
  visibleDocument,
  visibleExercise,

  authors,
  auth,
  guides,
});

export default rootReducer;
