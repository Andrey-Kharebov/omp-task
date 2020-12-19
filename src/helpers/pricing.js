const pricing = (products) => {

  products.forEach(product => {
    product.price = Math.floor(Math.random() * 451) + 150;
  })

  return products;
}

export default pricing;