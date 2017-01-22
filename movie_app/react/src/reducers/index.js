import { combineReducers } from 'redux';

let movies = (state = [], action ) => {
  switch (action.type) {
    case 'SET MOVIES':
      return action.movies;
    default:
      return state;
  }
};


const appReducer = combineReducers({movies});

export default appReducer;
