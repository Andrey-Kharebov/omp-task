import { booksAPI, moviesAPI, songsAPI } from '../../api/api';

const SET_PRODUCT = 'SET-PRODUCT';

const initialState = {
  product: null
}

const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRODUCT: 
      return {
        ...state,
        product: action.payload
      }
    default:
      return state;
  }
}

const setProduct = (payload) => ({ type: SET_PRODUCT, payload });

export const fetchProduct = (categoryAndProductPath) => (dispatch) => {
  dispatch(setProduct(null));
  const category = categoryAndProductPath.split('/')[1];
  const productId = categoryAndProductPath.split('/')[2];

  let product = {}

  switch(category) {
    case 'movies':
      moviesAPI.getMovieFromDB(productId)
        .then(movie => {
          product.title = movie.title;
          product.description = movie.overview;
          product.imageUrl = `https://image.tmdb.org/t/p/original/${ movie.poster_path }`;
          
          return dispatch(setProduct(product));
        })
      break;
    case 'songs':
      songsAPI.getSongFromDB(productId)
        .then(song => {
          product.title = song.name;
          product.description = null;
          product.imageUrl = song.images[0].url;
          return dispatch(setProduct(product));
        })
        break;
    case 'works':
      booksAPI.getWorkFromDB(productId)
        .then(book => {
          product.title = book.title;
          product.description = book.description.value;
          product.imageUrl = null;

          return dispatch(setProduct(product));
        })     
      break;
    case 'books':
      booksAPI.getBookFromDB(productId)
        .then(book => {
          product.title = book.title;
          product.description = null;
          product.imageUrl = null;

          return dispatch(setProduct(product));
        })
      break;
    default:
      return console.log('4to?');
  }
}

export default productReducer;