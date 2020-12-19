import { booksAPI, moviesAPI, songsAPI } from '../../api/api';

const SET_PRODUCT = 'SET-PRODUCT';
const SET_PRODUCT_IS_READY = 'SET-PRODUCT-IS-READY';

const initialState = {
  product: null,
  isReady: false
}

const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRODUCT: 
      return {
        ...state,
        product: action.payload
      }
    case SET_PRODUCT_IS_READY:
      return {
        ...state,
        isReady: action.payload
      }
    default:
      return state;
  }
}

const setProduct = (payload) => ({ type: SET_PRODUCT, payload });
const setProductsIsReady = (payload) => ({ type: SET_PRODUCT_IS_READY, payload });

export const fetchProduct = (categoryAndProductPath) => (dispatch) => {
  dispatch(setProduct(null));
  dispatch(setProductsIsReady(false));

  const category = categoryAndProductPath.split('/')[1];
  const productId = categoryAndProductPath.split('/')[2];
  const spareDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?';
  
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
          product.description = spareDescription;
          product.imageUrl = song.images[0].url;
          return dispatch(setProduct(product));
        })
        break;
    case 'works':
      booksAPI.getWorkFromDB(productId)
        .then(book => {
          product.title = book.title;
          product.description = book.description.value;

          if (book.covers) {
            product.imageUrl = `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`;
          } else {
            product.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
          }
         
          return dispatch(setProduct(product));
        })     
      break;
    case 'books':
      booksAPI.getBookFromDB(productId)
        .then(book => {
          product.title = book.title;
          product.description = spareDescription;

          if (book.covers) {
            product.imageUrl = `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`;
          } else {
            product.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
          }

          return dispatch(setProduct(product));
        })
      break;
    default:
      return console.log('4to?');
  }

  dispatch(setProductsIsReady(true));
}

export default productReducer;