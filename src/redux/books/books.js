import { async } from 'q';
import { postApi, getBookFromApi, deleteBookFromApi } from '../API/helpers';
// Actions
const ADDBOOK = 'books/reducerBook/ADDBOOK';
const REMOVEBOOK = 'books/reducerBook/DELETE';
const READ = 'books/reducerBook/READ';

export default function reducerBook(state = [], action = {}) {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.book];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Action creators

export const getReadBooks = () => async (dispatch) => {
  const books = await getBookFromApi();
  dispatch({ type: READ, payload: books });
};
export const addBook = (book) => async (dispatch) => {
  await postApi(book);
  dispatch({
    type: ADDBOOK,
    payload:
  { ...book, progress: 0 },
  });
};

export const deleteBook = (id) => async (dispatch) => {
  await deleteBookFromApi(id);
  dispatch({ type: REMOVEBOOK, payload: id });
};
