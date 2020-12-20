import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchBooks } from '../../redux/reducers/books-reducer';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';
import { useMessage } from '../../helpers/apiMessage';


function Books({ isReady, books, fetchBooks, apiMessage }) {
  const message = useMessage();

  useEffect(() => {
    apiMessage && message(apiMessage);

    if (!books) {
      fetchBooks();
    }
  }, [books, fetchBooks])
  

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
    isReady: state.booksReducer.isReady,
    apiMessage: state.booksReducer.apiMessage
  }
}

export default connect(mapStateToProps, { fetchBooks })(Books);
