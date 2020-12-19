import { booksAPI } from '../../api/api';
import pricing from '../../helpers/pricing';

const SET_BOOKS = 'SET-BOOKS';

const initialState = {
  books: null
}

const booksReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_BOOKS: 
      return {
        ...state,
        books: action.payload
      }
    default:
      return state;
  }
}

const setBooks = (payload) => ({ type: SET_BOOKS, payload })

export const fetchBooks = () => (dispatch) => {

  booksAPI.getBooksListFromDB()
    .then(books => {
      dispatch(setBooks(pricing(books)));
    })
}




export default booksReducer;
