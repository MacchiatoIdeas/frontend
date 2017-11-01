import {combineReducers} from 'redux';

import {subjects, visibleSubject} from './subjects';
import {visibleUnit} from './units';
import {visibleDocument} from './documents';
import {visibleExercise} from './exercises';
import {visibleGuide} from './guides';
import {auth} from './auth';
import {visibleCourse} from './courses';

const rootReducer = combineReducers({
  auth,
  subjects, visibleSubject,
  visibleUnit,
  visibleDocument,
  visibleExercise,
  visibleGuide,
  visibleCourse,
});

export default rootReducer;
