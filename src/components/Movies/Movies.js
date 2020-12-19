import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/reducers/movies-reducer';
import '../../App.css';
import { NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';

function Movies({ movies, isReady, fetchMovies }) {
  useEffect(() => {
    if (!movies) {
      fetchMovies();
    }
  }, [movies, fetchMovies])

  const movieShortOverview = (overview) => {
    const shortOverview = `${overview.split(' ').slice(0, 10).join(' ')} ...`;
    return shortOverview;
  }

  if (!isReady) {
    return (
      <div className='container'>
        <Loader />
      </div>
    )
  }

  return (
    <div>
      <div className='container'>
        { movies && movies.map(movie => {
          return (
            <div className='card' key={ movie.id }>
              <div className='card-image'>
                <img src={ `https://image.tmdb.org/t/p/original/${ movie.poster_path }` } alt='movieImg' />
                <span className='card-title' style={{ width: '100%', background: 'black', fontSize: '15px', opacity: '.7' }}>{ movie.original_title }</span>
              </div>
              <div className='card-content'> 
                <p>{ movieShortOverview( movie.overview ) }</p>
              </div>
              <div className='card-action'>
                <NavLink to={ `/movies/${ movie.id }` }>Подробнее</NavLink>
                <p>{ movie.price } руб.</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer.movies,
    isReady: state.moviesReducer.isReady
  }
}

export default connect(mapStateToProps, { fetchMovies })(Movies);
