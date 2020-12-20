import { songsAPI } from '../../api/api';
import addGenreToSongs from '../../helpers/genres/addGenreToSongs';
import preparingSongs from '../../helpers/preparing/preparingSongs';
import pricing from '../../helpers/pricing';

const SET_SONGS = 'SET-SONGS';
const SET_SONGS_IS_READY = 'SET-SONGS-IS-READY';

const initialState = {
  songs: null,
  isReady: false
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
    default:
      return state;
  }
}

const setSongs = (payload) => ({ type: SET_SONGS, payload });
const setSongsIsReady = (payload) => ({ type: SET_SONGS_IS_READY, payload });

export const fetchSongs = () => (dispatch) => {
  dispatch(setSongsIsReady(false));
  songsAPI.getSongsFromDB()
    .then(songs => {
      dispatch(setSongs(preparingSongs(addGenreToSongs(pricing(songs)))));
      dispatch(setSongsIsReady(true));
    })
}


export default songsReducer;