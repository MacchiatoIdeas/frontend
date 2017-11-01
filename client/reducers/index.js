import {combineReducers} from 'redux';

import {subjects, visibleSubject} from './subjects';
import {visibleUnit} from './units';
import {visibleDocument} from './documents';
import {visibleExercise} from './exercises';
import {visibleGuide} from './guides';
import {auth} from './auth';

const rootReducer = combineReducers({
  auth,
  subjects, visibleSubject,
  visibleUnit,
  visibleDocument,
  visibleExercise,
  visibleGuide,
});

export default rootReducer;
