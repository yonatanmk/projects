export {default as setMovieData} from './setMovieData';
export {default as addMovie} from './addMovie';
export {default as setSelectedMovie} from './setSelectedMovie';

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
