import Axios from 'axios';

const moviesApiKey = `35c7c6d5404276b46a9d66c9776051ca`;

const booksInstance = Axios.create({
  baseURL: 'https://openlibrary.org'
});

const moviesInstance = Axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

const songsInstance = Axios.create({
  baseURL: 'https:api.spotify.com/v1',
  headers: {
    'Authorization': `Bearer BQDgPBNQ31lEg5wY11soBI_DPkEU2ibBWzm58GSUt7D2Sb12ptf9KyWLpOK00kEdtnG-sTuAasj1-bnAGLxNHoHzS4KQk3tLxaQwkEKQ1jstP-2bpxJMX_p6zmqDyHhK55Kg7szF3LqyuHC-XOdsybSrfNfYXLE`
  }
});

export const booksAPI = {
  getBooksListFromDB() {
    return (
      booksInstance.get(`/people/slendersera/lists/OL158352L/seeds.json`)
        .then(response => {
          return response.data.entries;
        })
        .catch(error => {
          return error.response;
        })
    )
  },
  getWorkFromDB(productId) {
    return (
      booksInstance.get(`/works/${ productId }.json`)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error.response;
        })
    )
  },
  getBookFromDB(productId) {
    return (
      booksInstance.get(`/books/${ productId }.json`)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error.response;
        })
    )
  }
  
}
export const moviesAPI = {
  getMoviesListFromDB() {
    return (
      moviesInstance.get(`/list/28?api_key=${ moviesApiKey }`)
        .then(response => {
          return response.data.items;
        })
        .catch(error => {
          return error.response;
        })
    )
  },
  getMovieFromDB(productId) {
    return (
      moviesInstance.get(`/movie/${ productId }?api_key=${ moviesApiKey }`)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error.response;
        })
    )
  }
}
export const songsAPI = {
  getSongsFromDB() {
    return (
      songsInstance.get('/browse/new-releases?country=US&limit=50')
        .then(response => {
          return response.data.albums.items;
        })
        .catch(error => {
          return error.response;
        })
    )
  },
  getSongFromDB(productId) {
    return (
      songsInstance.get(`/albums/${ productId }`)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error.response;
        })
    )
  }
}
