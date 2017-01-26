import * as api from '../api';
import { setMoviesAction } from './index';

let setMovieData = (query) => (dispatch) => {
  api.fetchMovies(query)
  .then(movies => {
    dispatch(setMoviesAction(movies));
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default setMovieData;

export const addNote = (folder_id) => {
  let data = {
    note:{
      folder_id,
      body: 'New Note'
    }
  };
  let body = JSON.stringify(data);
  return fetch(`/notes`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body
  })
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json());
};
