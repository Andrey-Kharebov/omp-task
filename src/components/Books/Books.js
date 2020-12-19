import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchBooks } from '../../redux/reducers/books-reducer';
import { NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';


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
          <div className="card" key={ book.url } >
            <div className="card-image">
              <img src={ book.picture.url } alt='boolImg'></img>
              <span className='card-title' style={{ width: '100%', background: 'black', fontSize: '15px', opacity: '.7' }}>{ book.title }</span>
            </div>
            <div className="card-content">
              <p>{ book.type }</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="card-action">
              <NavLink to={ `${ book.url }`}>Подробнее</NavLink>
              <p>{ book.price } руб.</p>
            </div>
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
