import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../../redux/reducers/music-reducer';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';
import { useMessage } from '../../helpers/apiMessage';
import SearchBar from '../SearchBar/SearchBar';
import filterProducts from '../../helpers/filterProducts';
import { setFilterQuery } from '../../redux/reducers/filter-reducer';

function Music({ songs, isReady, fetchSongs, apiMessage, filterQuery, setFilterQuery }) {
  const message = useMessage();

  useEffect(() => {
    apiMessage && message(apiMessage);
    setFilterQuery('');
    
    if (!songs) {
      fetchSongs();
    }
  }, [songs, fetchSongs])
  
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
    <div className='container'>
      <SearchBar />
      { songs && filterProducts(songs, filterQuery).map(song => {
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
    isReady: state.musicReducer.isReady,
    apiMessage: state.musicReducer.apiMessage,
    filterQuery: state.filterReducer.filterQuery
  }
}

export default connect(mapStateToProps, { fetchSongs, setFilterQuery })(Music);
