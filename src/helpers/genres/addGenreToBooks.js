const addGenreToBooks = (products) => {
  const genres = ['Fiction', 'Narrative', 'Novel', 'Poetry', 'Prose', 'Drama', 'Mystery', 'Historian'];

  products.forEach(product => {
    product.genre = genres[Math.floor(Math.random() * genres.length)];
  })

  return products;
}

export default addGenreToBooks;