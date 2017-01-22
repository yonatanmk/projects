import * as api from '../api';
import { setMoviesAction } from './index';

let setMovieData = (dispatch) => {
  api.fetchMovies()
  .then(movies => {
    dispatch(setMoviesAction(movies));
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default setMovieData;
