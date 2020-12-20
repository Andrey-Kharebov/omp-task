const preparingBooks = (products) => {

  products.forEach(product => {
    product.id = product.url;
    product.imageUrl = product.picture.url;
    product.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  })

  return products;
}

export default preparingBooks;