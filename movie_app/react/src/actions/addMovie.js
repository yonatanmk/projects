import * as api from '../api';
// import { setMoviesAction } from './index';

let addMovie = (movie) => (dispatch) => {
  api.addMovie(movie)
  // .then(movies => {
  //   dispatch(setMoviesAction(movies));
  // })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default addMovie;
