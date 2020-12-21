import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import booksReducer from './reducers/books-reducer';
import filterReducer from './reducers/filter-reducer';
import moviesReducer from './reducers/movies-reducer';
import musicReducer from './reducers/music-reducer';
import productReducer from './reducers/product-reducer';

const middlewares = [thunkMiddleware];

const reducers = combineReducers({
  moviesReducer: moviesReducer,
  booksReducer: booksReducer,
  musicReducer: musicReducer,
  productReducer: productReducer,
  filterReducer: filterReducer
});

const store = createStore(reducers, applyMiddleware(...middlewares));

window.store = store;
export default store;