//Actions

const ADDBOOK = "books/ADDBOOK";
const REMOVEBOOK = "books/DELETE"
const books = [];

//Reducers 
export default function reducerBook(state = books, action= {}) {
switch(action.type){
 case ADDBOOK:
  return [
   ...books, action.book
  ];
  case REMOVEBOOK:
   return [
    books.map(book=> book.id !== action.id)
   ];
   default:
    return state;
}

}

//Action creators
export default function addBook(book){
 return {type: ADDBOOK, book}
}

export default function deleteBook (id){
 return {type:REMOVEBOOK, id}
}