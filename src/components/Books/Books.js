import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchBooks } from '../../redux/reducers/books-reducer';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';


function Books({ isReady, books, fetchBooks }) {

  useEffect(() => {
    if (!books) {
      fetchBooks();
    }
  }, [books, fetchBooks])
  

  if (!isReady) {
    return (
      <div className='container'>
        <Loader />
      </div>
    )
  }

  return (
    <div className='container'>
      { books && books.map(book => {
        return (  
          <div className='card' key={ book.id } >
            <ProductCard product={ book } />     
          </div>    
          )
        })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    books: state.booksReducer.books,
    isReady: state.booksReducer.isReady
  }
}

export default connect(mapStateToProps, { fetchBooks })(Books);
