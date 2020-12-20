import React from 'react';
import './ProductCard.css';
import { NavLink } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <>
      <div className='card-image'>
        <img src={ product.imageUrl } alt={ product.title } />
        <span className='card-title'>{ product.title }</span>
      </div>
      <div className='card-content'>
        <p className='product-genre'>{ product.genre }</p>
        <p className='product-description'>{ product.description }</p>
      </div>
      <div className='card-action'>
        <NavLink to={ {
          pathname: product.url,
          clickedProduct: product
        } }>Подробнее</NavLink>
        <p>{ product.price } RUB</p>
      </div>
    </>
  )
}


export default ProductCard;
