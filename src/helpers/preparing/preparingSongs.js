const preparingSongs = (products) => {

  products.forEach(product => {
    product.url = `/songs/${ product.id }`;
    product.imageUrl = product.images[0].url;
    product.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
    product.title = product.name;
  })

  return products;
}

export default preparingSongs;