import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchSongs } from '../../redux/reducers/music-reducer';


function Music({ songs, fetchSongs }) {

  useEffect(() => {
    if (!songs) {
      fetchSongs();
    }
  }, [songs, fetchSongs])

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
    songs: state.musicReducer.songs
  }
}
export default connect(mapStateToProps, { fetchSongs })(Music);
