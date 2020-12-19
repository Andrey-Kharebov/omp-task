import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className='nav-wrapper'>
        <NavLink to='/movies'><button className='btn btn-primary'>Movies</button></NavLink>       
        <NavLink to='/music'><button className='btn btn-primary'>Music</button></NavLink>
        <NavLink to='/books'><button className='btn btn-primary'>Books</button></NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
