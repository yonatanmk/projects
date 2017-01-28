export {default as setMovieData} from './setMovieData';
export {default as addMovie} from './addMovie';
export {default as setSelectedMovie} from './setSelectedMovie';
export {default as setUser} from './setUser';

export const setMoviesAction = (movies) => {
  return {
    type: 'SET MOVIES',
    movies
  };
};

export const setSelectedMovieAction = (movie) => {
  return {
    type: 'SET SELECTED MOVIE',
    movie
  };
};

export const logFirstSearchAction = () => {
  return {
    type: 'FIRST SEARCH'
  };
};

export const setUserAction = (user) => {
  return {
    type: 'SET USER',
    user
  };
};
