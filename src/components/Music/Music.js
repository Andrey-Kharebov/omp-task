import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../../redux/reducers/music-reducer';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';


function Music({ songs, isReady, fetchSongs }) {

  useEffect(() => {
    if (!songs) {
      fetchSongs();
    }
  }, [songs, fetchSongs])
  
  if (!isReady) {
    return (
      <div className='container'>
        <Loader />
      </div>
    )
  }

  return (
    <div className='container'>
      { songs && songs.map(song => {
        return (
          <div className='card' key={ song.id }>
            <ProductCard product={ song } />
          </div>
        )
      })}
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    songs: state.musicReducer.songs,
    isReady: state.musicReducer.isReady
  }
}
export default connect(mapStateToProps, { fetchSongs })(Music);
