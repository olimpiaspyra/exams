import {combineReducers, createStore} from 'redux';

import initialState from './initialState';
import themeReducer from './themeReducer';
import examsReducer from './examsReducer';
import filtersReducer from './filtersReducer';

// define subreducers
const subreducers = {
  theme: themeReducer,
  exams: examsReducer,
  filters: filtersReducer,
};

// merge all reducers
const reducer = combineReducers(subreducers);

// create store
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
