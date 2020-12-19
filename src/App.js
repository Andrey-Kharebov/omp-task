import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import Music from './components/Music/Music';
import Movies from './components/Movies/Movies';
import Books from './components/Books/Books';
import Product from './components/Product/Product';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact><h6>Nothing interesting on the main page. You're welcome to choose any category.</h6></Route>
        <Route path='/movies' exact><Movies /></Route>
        <Route path='/music' exact><Music /></Route>
        <Route path='/books' exact><Books /></Route>
        
        <Route path='/:category/:id' render={(props) => {
          const categoryAndProductPath = props.location.pathname;
          return (
            <Product categoryAndProductPath={ categoryAndProductPath } />
          )
        }} />        
      </Switch>
    </div>
  )
}

export default App;
