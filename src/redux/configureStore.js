import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducerCategories from './categories/categories';
import reducerBook from './books/books';

const reducers = combineReducers({
  bookreducer: reducerBook,
  categoriesReducer: reducerCategories,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
