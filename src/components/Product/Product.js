import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../../redux/reducers/product-reducer';

function Product({ product, fetchProduct, categoryAndProductPath }) {
  useEffect(() => {
    fetchProduct(categoryAndProductPath);
  }, [categoryAndProductPath, fetchProduct])

  return (
    <div className='container'>
      { product 
        ? <>
            <div>
              <img src={ product.imageUrl } style={{ maxWidth: '300px' }} alt='productImg'></img>
            </div>
            <div>
              <p>{ product.title }</p>
              <p>{ product.description }</p>
            </div> 
          </>
        : null
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    product: state.productReducer.product
  }
}

export default connect(mapStateToProps, { fetchProduct })(Product);
