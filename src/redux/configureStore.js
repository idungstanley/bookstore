import { legacy_createStore as createStore, combineReducers } from 'redux';
import reducerCategories from './categories/categories';
import reducerBook from './books/books';
// import { combineReducers } from 'redux';
const reducers = combineReducers({
  bookreducer: reducerBook,
  categoriesReducer: reducerCategories,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
