import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

// create an object for the default data
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
