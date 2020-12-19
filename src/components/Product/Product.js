import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../../redux/reducers/product-reducer';
import Loader from '../Loader/Loader';

function Product({ product, isReady, fetchProduct, categoryAndProductPath }) {
  useEffect(() => {
    fetchProduct(categoryAndProductPath);
  }, [categoryAndProductPath, fetchProduct])

  if (!isReady) {
    return (
      <div className='container'>
        <Loader />
      </div>
    )
  }

  return (
    <div className='container'>
      { product 
        ? <div className='productSection'>
            <div className='productImage'>
              <img src={ product.imageUrl } alt='productImg'></img>
            </div>
            <div className='productDescription'>
              <h4>{ product.title }</h4>
              <p>{ product.description }</p>
              <div className='productActions'>
                <button className='btn orange'>125 rub</button>
                <button className='btn btn-primary'>Make An Order</button>
              </div>
            </div> 
          </div>
        : null
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    product: state.productReducer.product,
    isReady: state.productReducer.isReady
  }
}

export default connect(mapStateToProps, { fetchProduct })(Product);
