import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchSongs } from '../../redux/reducers/music-reducer';
import Loader from '../Loader/Loader';


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
            <div className='card-image'>
              <img src={ song.images[0].url } alt='songImg' />
              <span className='card-title' style={{ width: '100%', background: 'black', fontSize: '15px', opacity: '.7' }}>{ song.name }</span>
            </div>
            <div className="card-content">
              <p>{ song.type }</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="card-action">
              <NavLink to={ `/songs/${ song.id }` }>Подробнее</NavLink>
              <p>{ song.price } руб.</p>
            </div>
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
