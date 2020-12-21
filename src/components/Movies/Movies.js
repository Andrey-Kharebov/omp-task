import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/reducers/movies-reducer';
import '../../App.css';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';
import { useMessage } from '../../helpers/apiMessage';
import SearchBar from '../SearchBar/SearchBar';
import filterProducts from '../../helpers/filterProducts';
import { setFilterQuery } from '../../redux/reducers/filter-reducer';

function Movies({ movies, isReady, fetchMovies, apiMessage, filterQuery, setFilterQuery }) {
  const message = useMessage();

  useEffect(() => {
    apiMessage && message(apiMessage);
    setFilterQuery('');

    if (!movies) {
      fetchMovies();
    }
  }, [movies, fetchMovies])
  
  if (!isReady) {
    return (
      <div className='container'>
        { apiMessage 
        ? <h5>{ apiMessage }</h5> 
        : <Loader />
        }
      </div>
    )
  }

  return (
    <div>
      <div className='container'>
        <SearchBar />
        { movies && filterProducts(movies, filterQuery).map(movie => {
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
    isReady: state.moviesReducer.isReady,
    apiMessage: state.moviesReducer.apiMessage,    
    filterQuery: state.filterReducer.filterQuery
  }
}

export default connect(mapStateToProps, { fetchMovies, setFilterQuery })(Movies);
