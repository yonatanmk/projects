import * as api from '../api';
import setUser from './setUser';

let setUserMovie = (user, movie) => (dispatch) => {
  api.addUserMovie(user.id, movie.id)
  .then(body => {
    dispatch(setUser());
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default setUserMovie;
