import * as api from '../api';
import { setSelectedMovie } from './index';

let addMovie = (movie) => (dispatch) => {
  api.addMovie(movie)
  // .then(movie => {
  //   dispatch(setSelectedMovie(movie));
  // })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default addMovie;
