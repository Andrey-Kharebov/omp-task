import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchBooks } from '../../redux/reducers/books-reducer';
import { NavLink } from 'react-router-dom';


function Books({ books, fetchBooks }) {

  useEffect(() => {
    if (!books) {
      fetchBooks();
    }
  }, [books, fetchBooks])

  const imageSizeLarging = (imgUrl) => {
    let sizeSmall = '-S';
    let sizeLarge = '-L';
    
    return imgUrl.replace(sizeSmall, sizeLarge);
  }

  return (
    <div>
      <div className='container'>
      { books && books.map(book => {
        return (  
          <div className="card" key={ book.url } >
            <div className="card-image">
              <img src={ imageSizeLarging(`http:${ book.picture.url }`)} alt='boolImg'></img>
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
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    books: state.booksReducer.books
  }
}

export default connect(mapStateToProps, { fetchBooks })(Books);
