const addGenreToSongs = (products) => {
  const genres = ['Rock', 'Hip-hop', 'Pop', 'Jazz', 'Blues', 'Electronic', 'Rhythm', 'Dance'];

  products.forEach(product => {
    product.genre = genres[Math.floor(Math.random() * genres.length)];
  })

  return products;
}

export default addGenreToSongs;