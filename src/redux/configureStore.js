import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
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
  composeWithDevTools(applyMiddleware(thunk)),
);
/* eslint-enable */

export default store;
