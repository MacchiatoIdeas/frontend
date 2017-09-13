import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

// create an object for the default data
const defaultState = {
  subjects: undefined,
  units: undefined,
  authors: undefined,
  contents: undefined,
  auth: undefined,
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;
