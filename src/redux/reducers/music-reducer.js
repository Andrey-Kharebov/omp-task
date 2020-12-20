import { songsAPI } from '../../api/api';
import addGenreToSongs from '../../helpers/genres/addGenreToSongs';
import preparingSongs from '../../helpers/preparing/preparingSongs';
import pricing from '../../helpers/pricing';

const SET_SONGS = 'SET-SONGS';
const SET_SONGS_IS_READY = 'SET-SONGS-IS-READY';
const ADD_SONGS_API_MESSAGE = 'ADD-SONGS-API-MESSAGE';

const initialState = {
  songs: null,
  isReady: false,
  apiMessage: null
}

const songsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SONGS: 
      return {
        ...state,
        songs: action.payload
      }
    case SET_SONGS_IS_READY:
      return {
        ...state,
        isReady: action.payload
      }
    case ADD_SONGS_API_MESSAGE: 
      return {
        ...state, 
        apiMessage: action.message
      }
    default:
      return state;
  }
}

const setSongs = (payload) => ({ type: SET_SONGS, payload });
const setSongsIsReady = (payload) => ({ type: SET_SONGS_IS_READY, payload });
const addSongsApiMessage = (message) => ({ type: ADD_SONGS_API_MESSAGE, message });

export const fetchSongs = () => (dispatch) => {
  dispatch(setSongsIsReady(false));
  dispatch(addSongsApiMessage(null));
  songsAPI.getSongsFromDB()
    .then(response => {
      if (response.status === 401) {
        return dispatch(addSongsApiMessage('Something went wrong. Please, try again later.'));
      }
      const songs = response;
      dispatch(setSongs(preparingSongs(addGenreToSongs(pricing(songs)))));
      dispatch(setSongsIsReady(true));
    })
}


export default songsReducer;