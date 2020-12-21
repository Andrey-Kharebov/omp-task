import React from 'react';
import { connect } from 'react-redux';
import { setFilterQuery } from '../../redux/reducers/filter-reducer';
import './SearchBar.css';

function SearchBar({ filterQuery, setFilterQuery }) {

  const changeHandler = (event) => {
    setFilterQuery(event.target.value);
  }

  return (
    <nav className='search-nav'>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" required value={ filterQuery } onChange={ (event) => { changeHandler(event) } } />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    filterQuery: state.filterReducer.filterQuery
  }
}

export default connect(mapStateToProps, { setFilterQuery })(SearchBar);

