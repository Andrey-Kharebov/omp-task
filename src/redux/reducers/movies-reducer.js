import { moviesAPI } from '../../api/api';
import pricing from '../../helpers/pricing';

const SET_MOVIES = 'SET-MOVIES';

const initialState = {
  movies: null
}

const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MOVIES: 
      return {
        ...state,
        movies: action.payload
      }
    default:
      return state;
  }
}

const setMovies = (payload) => ({ type: SET_MOVIES, payload })

export const fetchMovies = () => (dispatch) => {
  moviesAPI.getMoviesListFromDB()
    .then(movies => {
      dispatch(setMovies(pricing(movies)));
    })
}


export default moviesReducer;

