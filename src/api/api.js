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
    'Authorization': `Bearer BQB2Wx95xslor45Q2ALlf2K9a7ybXxE5anbLn2JxCWtHcoAxL8hL-wt67dBVA6hCTIzPatlemmiOEbVggj1jcD2_GrNjICaAjw808UCbyZzsSN-4XCdl1vCXNtQhUHF482psyKqottLNv8C6pWi4_GYaGoCf93Y`
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
