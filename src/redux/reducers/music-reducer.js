import { songsAPI } from '../../api/api';
import pricing from '../../helpers/pricing';

const SET_SONGS = 'SET-SONGS';

const initialState = {
  songs: null
}

const songsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SONGS: 
      return {
        ...state,
        songs: action.payload
      }
    default:
      return state;
  }
}

const setSongs = (payload) => ({ type: SET_SONGS, payload })

export const fetchSongs = () => (dispatch) => {
  songsAPI.getSongsFromDB()
    .then(songs => {
      dispatch(setSongs(pricing(songs)));
    })
}


export default songsReducer;