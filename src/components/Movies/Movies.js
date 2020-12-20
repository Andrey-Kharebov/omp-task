import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/reducers/movies-reducer';
import '../../App.css';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';

function Movies({ movies, isReady, fetchMovies }) {
  useEffect(() => {
    if (!movies) {
      fetchMovies();
    }
  }, [movies, fetchMovies])

  
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
              <ProductCard product={ movie } />
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
