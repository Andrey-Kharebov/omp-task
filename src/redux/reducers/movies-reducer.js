import { moviesAPI } from '../../api/api';
import pricing from '../../helpers/pricing';

const SET_MOVIES = 'SET-MOVIES';
const SET_MOVIES_IS_READY = 'SET-MOVIES-IS-READY';

const initialState = {
  movies: null,
  isReady: false
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
    default:
      return state;
  }
}

const setMovies = (payload) => ({ type: SET_MOVIES, payload });
const setMoviesIsReady = (payload) => ({ type: SET_MOVIES_IS_READY, payload });

export const fetchMovies = () => (dispatch) => {
  dispatch(setMoviesIsReady(false));
  moviesAPI.getMoviesListFromDB()
    .then(movies => {
      dispatch(setMovies(pricing(movies)));
      dispatch(setMoviesIsReady(true));
    })
}


export default moviesReducer;

