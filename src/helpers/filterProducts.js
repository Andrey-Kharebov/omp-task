const filterProducts = (products, filterQuery) => {

  let filteredProducts = products.filter(
    product => 
      product.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      product.genre.toLowerCase().includes(filterQuery.toLowerCase()) ||
      product.price.toString().includes(filterQuery)
    );

  return filteredProducts;
}

export default filterProducts;