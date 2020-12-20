import { moviesAPI } from '../../api/api';
import addGenreToMovies from '../../helpers/genres/addGenreToMovies';
import preparingMovies from '../../helpers/preparing/preparingMovies';
import pricing from '../../helpers/pricing';

const SET_MOVIES = 'SET-MOVIES';
const SET_MOVIES_IS_READY = 'SET-MOVIES-IS-READY';
const ADD_MOVIES_API_MESSAGE = 'ADD-MOVIES-API-MESSAGE';

const initialState = {
  movies: null,
  isReady: false,
  apiMessage: null
}

const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MOVIES: 
      return {
        ...state,
        movies: action.payload
      }
    case SET_MOVIES_IS_READY:
      return {
        ...state,
        isReady: action.payload
      }
    case ADD_MOVIES_API_MESSAGE: 
      return {
        ...state, 
        apiMessage: action.message
      }
    default:
      return state;
  }
}

const setMovies = (payload) => ({ type: SET_MOVIES, payload });
const setMoviesIsReady = (payload) => ({ type: SET_MOVIES_IS_READY, payload });
const addMoviesApiMessage = (message) => ({ type: ADD_MOVIES_API_MESSAGE, message });

export const fetchMovies = () => (dispatch) => {
  dispatch(setMoviesIsReady(false));
  dispatch(addMoviesApiMessage(null));

  moviesAPI.getMoviesListFromDB()
    .then(response => {
      if (response.data && response.data.success === false) {
        return dispatch(addMoviesApiMessage('Something went wrong. Please, try again later.'));
      }

      const movies = response;
      dispatch(setMovies(preparingMovies(addGenreToMovies(pricing(movies)))));
      dispatch(setMoviesIsReady(true));
    })
}


export default moviesReducer;

