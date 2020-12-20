const movieShortOverview = (overview) => {
  const shortOverview = `${overview.split(' ').slice(0, 5).join(' ')} ...`;
  return shortOverview;
}

const preparingMovies = (products) => {

  products.forEach(product => {
    product.url = `/movies/${ product.id }`;
    product.imageUrl = `https://image.tmdb.org/t/p/original/${ product.poster_path }`;
    product.description = movieShortOverview( product.overview );
  })

  return products;
}

export default preparingMovies;