export {default as setMovieData} from './setMovieData';

export const setMoviesAction = (movies) => {
  return {
    type: 'SET MOVIES',
    movies
  };
};
