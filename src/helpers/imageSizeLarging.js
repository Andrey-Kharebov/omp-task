const imageSizeLarging = (products) => {
  let sizeSmall = '-S';
  let sizeLarge = '-L';

  products.forEach(product => {
    let smallImgUrl = product.picture.url;
    product.picture.url = `http:${smallImgUrl.replace(sizeSmall, sizeLarge)}`;
    return product.picture.url
  })

  return products;
}

export default imageSizeLarging;