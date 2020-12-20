import React, { useEffect } from 'react';
import './Product.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchProduct, setProductsIsReady } from '../../redux/reducers/product-reducer';
import Loader from '../Loader/Loader';

function Product({ product, isReady, fetchProduct, categoryAndProductPath, clickedProduct, setProductsIsReady }) {
  
  useEffect(() => {
    if (clickedProduct) {
      setProductsIsReady(false);
      fetchProduct(categoryAndProductPath, clickedProduct);
    }
  }, [categoryAndProductPath, clickedProduct, fetchProduct, setProductsIsReady])



  if (!clickedProduct && !product) {
    return <Redirect to='/' />
  } else if (!isReady) {
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
                <button className='btn orange'>{ product.price } rub</button>
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

export default connect(mapStateToProps, { fetchProduct, setProductsIsReady })(Product);
