// Actions
const ADDBOOK = 'books/reducerBook/ADDBOOK';
const REMOVEBOOK = 'books/reducerBook/DELETE';
const books = [];

// Reducers
export default function reducerBook(state = books, action = {}) {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state, action.book,
      ];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Action creators
export function addBook(book) {
  return { type: ADDBOOK, book };
}

export function deleteBook(id) {
  return { type: REMOVEBOOK, id };
}
