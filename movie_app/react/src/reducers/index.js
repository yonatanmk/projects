import { combineReducers } from 'redux';

let movies = (state = [], action ) => {
  switch (action.type) {
    case 'SET MOVIES':
      return action.movies;
    default:
      return state;
  }
};

let selectedMovie = (state = null, action ) => {
  switch (action.type) {
    case 'SET SELECTED MOVIE':
      return action.movie;
    default:
      return state;
  }
};

let firstSearch = (state = true, action ) => {
  switch (action.type) {
    case 'FIRST SEARCH':
      return false;
    default:
      return state;
  }
};

const appReducer = combineReducers({movies, selectedMovie, firstSearch});

export default appReducer;
