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
    'Authorization': `Bearer BQB5Be55HSs9DSoLYTkscTDjckJA9Qx9wiEmct_PK0S-mH4L0lahfqWcaSVUiulAaidRkbCpvH-hKIGuvG2kVmGWEdRVopDx8N9qVtOT5NHm7aMDfKmNYP0WscYtYR83NItUork6u9mVHFY2Mzk8QW9rOoUKqzY`
  }
});

export const booksAPI = {
  getBooksListFromDB() {
    return (
      booksInstance.get(`/people/slendersera/lists/OL158352L/seeds.json`)
        .then(response => {
          return response.data.entries;
        })
    )
  },
  getWorkFromDB(productId) {
    return (
      booksInstance.get(`/works/${ productId }.json`)
        .then(response => {
          return response.data;
        })
    )
  },
  getBookFromDB(productId) {
    return (
      booksInstance.get(`/books/${ productId }.json`)
        .then(response => {
          return response.data;
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
    )
  },
  getMovieFromDB(productId) {
    return (
      moviesInstance.get(`/movie/${ productId }?api_key=${ moviesApiKey }`)
        .then(response => {
          return response.data;
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
    )
  },
  getSongFromDB(productId) {
    return (
      songsInstance.get(`/albums/${ productId }`)
        .then(response => {
          return response.data;
        })
    )
  }
}
