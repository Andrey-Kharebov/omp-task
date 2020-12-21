const SET_FILTER_QUERY = 'SET-FILTER-QUERY';

const initialState = {
  filterQuery: ''
}

const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_FILTER_QUERY:
      return {
        ...state,
        filterQuery: action.payload
      }
    default:
      return state;
  }
}

export const setFilterQuery = (payload) => ({type: SET_FILTER_QUERY, payload});

export default filterReducer;

