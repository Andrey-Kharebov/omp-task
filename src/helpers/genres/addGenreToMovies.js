const addGenreToMovies = (products) => {
  const genres = ['Action', 'Drama', 'Sci-fi', 'Fantasy', 'Comedy', 'Horror', 'Crime', 'Epic'];

  products.forEach(product => {
    product.genre = genres[Math.floor(Math.random() * genres.length)];
  })

  return products;
}

export default addGenreToMovies;