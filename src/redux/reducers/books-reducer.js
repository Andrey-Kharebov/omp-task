import { booksAPI } from '../../api/api';
import addGenreToBooks from '../../helpers/genres/addGenreToBooks';
import imageSizeLarging from '../../helpers/imageSizeLarging';
import preparingBooks from '../../helpers/preparing/preparingBooks';
import pricing from '../../helpers/pricing';

const SET_BOOKS = 'SET-BOOKS';
const SET_BOOKS_IS_READY = 'SET-BOOKS-IS-READY';


const initialState = {
  books: null,
  isReady: false
}

const booksReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_BOOKS: 
      return {
        ...state,
        books: action.payload
      }
    case SET_BOOKS_IS_READY:
      return {
        ...state,
        isReady: action.payload
      }
    default:
      return state;
  }
}

const setBooks = (payload) => ({ type: SET_BOOKS, payload })
const setBooksIsReady = (payload) => ({ type: SET_BOOKS_IS_READY, payload });

export const fetchBooks = () => (dispatch) => {
  dispatch(setBooksIsReady(false));
  booksAPI.getBooksListFromDB()
    .then(books => {
      dispatch(setBooks(preparingBooks(addGenreToBooks(pricing(imageSizeLarging(books))))));
      dispatch(setBooksIsReady(true));
    })
}




export default booksReducer;
